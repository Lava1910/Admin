import React, { useState,useEffect } from "react";
import PageContainer from "src/components/container/PageContainer";
import { Select, MenuItem, Box, FormControl, InputLabel, TextField } from "@mui/material";
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button, Stack,
    Typography, Modal } from "@mui/material";
import { getAll,search, searchByTopic, searchByType } from "src/services/question.service";
import { topicName } from "src/enum/Topic";
import { typeQuestion } from "src/enum/Type";

const QuestionList = () => {
    const [questions,setQuestions] = useState([]);
    const [open,setOpen] = useState(false);
    const [topicValue,setTopicValue] = useState('');
    const [typeValue,setTypeValue] = useState('');
    const topics = Object.keys(topicName);
    const types = Object.keys(typeQuestion);
    //Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3
    };
    const handleOpen = (rowKey) => {
        setOpen(prevState => ({
            ...prevState,
            [rowKey]: true
        }));;
    };
    const handleClose = (rowKey) => {
        setOpen(prevState => ({
            ...prevState,
            [rowKey]: false
        }));
    };
    // call API Getall
    const getQuestions = async () => {
        const questions = await getAll();
        setQuestions(questions);
    }
    useEffect(() => {
        getQuestions();
    },[])
    //Searching Input
    let inputHandler = async (e) => {
        var lowerCase = e.target.value.toLowerCase();
        if(lowerCase.trim() === "") {
            const questions = await getAll();
            if (Array.isArray(questions)) {
                setQuestions(questions);
            }
        } else {
            const questions = await search(lowerCase);
            if (Array.isArray(questions)) {
                setQuestions(questions);
            }
        }
    }
    //topic select
    const selectTopicHandler = async (e) => {
        setTopicValue(e.target.value);
        const questions = await searchByTopic(e.target.value);
        if (Array.isArray(questions)) {
            setQuestions(questions);
        }
    }
    //type select
    const selectTypeHandler = async (e) => {
        setTypeValue(e.target.value);
        const questions = await searchByType(e.target.value);
        if (Array.isArray(questions)) {
            setQuestions(questions);
        }
    }

    return (
        <PageContainer title="QuestionList" description="this is QuestionList page">
            {/* Searching Bar */}
            <Box style={{marginBottom: "10px"}}>
                <TextField
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    sx={{ minWidth: 400 }} 
                    style={{marginRight: "5px"}}
                    onChange={inputHandler}
                ></TextField>
                <FormControl sx={{ minWidth: 200 }} style={{marginRight: "5px"}}>
                    <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        onChange={selectTopicHandler}
                        value={topicValue ? topicValue : ""}
                    >
                    {
                        topics.map(key => (
                            <MenuItem key={key} value={topicName[key]}>{topicName[key]}</MenuItem>
                        ))
                    }
                    </Select>         
                </FormControl>
                <FormControl sx={{ minWidth: 100 }} style={{marginRight: "5px"}}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    onChange={selectTypeHandler}
                    value={typeValue ? typeValue : ""}
                    >
                    {
                        types.map(key => (
                            <MenuItem key={key} value={typeQuestion[key]}>{typeQuestion[key]}</MenuItem>
                        ))
                    }
                    </Select>         
                </FormControl>
                <FormControl sx={{ minWidth: 150 }} style={{marginRight: "5px"}}>
                    <InputLabel id="demo-simple-select-label">Difficult</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Difficult"
                    >
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    </Select>         
                </FormControl>
                {/* <Button variant="contained" style={{justifyContent:"flex-end"}}>Create Question</Button> */}
            </Box>
            {/* Table Question */}
            <TableContainer component={Paper}>            
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead style={{backgroundColor: "#8da8e6"}}>
                        <TableRow>
                            <TableCell><Typography variant="h5">Question</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h5">Topic</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h5">Type</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h5">Difficult</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((row) => (
                            <TableRow
                            key={row.contentQuestion}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                <Typography variant="h6">{row.contentQuestion}</Typography>
                                <br/>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" onClick={() => handleOpen(row.contentQuestion)}>Answer</Button>
                                        <Modal
                                            open={open[row.contentQuestion] || false}
                                            onClose={() => handleClose(row.contentQuestion)}
                                            aria-labelledby="child-modal-title"
                                            aria-describedby="child-modal-description"
                                        >
                                            <Box sx={{ ...style, width: 600 }}>
                                                <h3 id="child-modal-title">{row.contentQuestion}</h3>
                                                <ul>
                                                    {row.contentAnswer.map((answer,index) => (
                                                    <li key={index} 
                                                        style= {{ 
                                                            listStyle: 'none',
                                                            border: row.correctAnswers.includes(answer) ? '1px solid #00cc00' : '1px solid red',
                                                            borderRadius: '10px',
                                                            padding:'8px',
                                                            margin:'2px',
                                                            color: row.correctAnswers.includes(answer) ? '#00cc00' : 'red',
                                                            width: '400px'
                                                        }}>{answer}</li>
                                                    ))}
                                                </ul>                                      
                                            </Box>
                                        </Modal>
                                    <Button variant="contained" color="success">Update</Button>
                                    <Button variant="contained" color="error">Delete</Button>  
                                </Stack>
                            </TableCell>
                            <TableCell align="right"><Typography variant="h6">{row.topicName}</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">{row.type}</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">{row.difficultyLevel}</Typography></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PageContainer>
    );
};

export default QuestionList;