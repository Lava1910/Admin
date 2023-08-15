import React from "react";  
import PageContainer from "src/components/container/PageContainer";
import { Typography,
    Checkbox , FormControl,
    TextField, Select,
    Button,
    Box,
    FormControlLabel,
    MenuItem } from "@mui/material";
import { topicName } from "src/enum/Topic";
import { typeQuestion } from "src/enum/Type";
import { difficultyLevel } from "src/enum/DifficultLevel";

const CreateQuestion = () => {
    const topics = Object.keys(topicName);
    const types = Object.keys(typeQuestion);
    const difficultyLevels = Object.keys(difficultyLevel);
    return (
        <PageContainer title="CreateQuestion" description="this is CreatQuestion page">  
            <Typography variant="h3" style={{textAlign: "center"}}>Create Question</Typography>
            <br/>
                <form>
                    <Box className="row">
                        <Box className="col">
                            <Typography variant="h6">Content Question</Typography>
                            <TextField
                                style={{ width: "80%", margin: "10px" }}
                                type="text"
                                label="Content Question"
                                variant="outlined"
                            />
                            <br />
                            <br />
                            <Typography variant="h6" style={{ margin: "10px" }}>Answers</Typography>
                            <Box className="row">
                                <Box className="col">
                                    <TextField
                                        style={{ width: "100%", margin: "5px" }}
                                        type="text"
                                        label="Answer 1"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="col">
                                    <FormControlLabel style={{display: "flex",margin: "5px"}} control={<Checkbox />} label="Correct Answer" />
                                </Box>
                            </Box>
                            <Box className="row">
                                <Box className="col">
                                    <TextField
                                        style={{ width: "100%", margin: "5px" }}
                                        type="text"
                                        label="Answer 2"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="col">
                                    <FormControlLabel style={{display: "flex",margin: "5px"}} control={<Checkbox />} label="Correct Answer" />
                                </Box>
                            </Box> 
                            <Box className="row">
                                <Box className="col">
                                    <TextField
                                        style={{ width: "100%", margin: "5px" }}
                                        type="text"
                                        label="Answer 3"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box className="col">
                                    <FormControlLabel style={{display: "flex",margin: "5px"}} control={<Checkbox />} label="Correct Answer" />
                                </Box>
                            </Box> 
                            <Box className="row">
                                <Box className="col">
                                    <TextField
                                        style={{ width: "100%", margin: "5px" }}
                                        type="text"
                                        label="Answer 4"
                                        variant="outlined"q
                                    />
                                </Box>
                                <Box className="col">
                                    <FormControlLabel style={{display: "flex",margin: "5px"}} control={<Checkbox />} label="Correct Answer" />
                                </Box>
                            </Box>
                            <Box>
                                <Button variant="outlined" color="primary">Add more answers</Button>
                            </Box>  
                        </Box>
                        <Box className="col">
                            <Typography variant="h6">Topic</Typography>
                            <FormControl sx={{ minWidth: 200 }} style={{marginRight: "5px"}}>
                                <Select style={{margin: '5px'}}>
                                {
                                    topics.map(key => (
                                        <MenuItem key={key} value={topicName[key]}>{topicName[key]}</MenuItem>
                                    ))
                                }
                                </Select>         
                            </FormControl>
                            <br />
                            <br />
                            <Typography variant="h6">Type Question</Typography>
                            <FormControl sx={{ minWidth: 200 }} style={{marginRight: "5px"}}>
                                <Select style={{margin: '5px'}}>
                                {
                                    types.map(key => (
                                        <MenuItem key={key} value={typeQuestion[key]}>{typeQuestion[key]}</MenuItem>
                                    ))
                                }
                                </Select>         
                            </FormControl>
                            <br />
                            <br />
                            <Typography variant="h6">Difficult Level</Typography>
                            <FormControl sx={{ minWidth: 200 }} style={{marginRight: "5px"}}>
                                <Select style={{margin: '5px'}}>
                                {
                                    difficultyLevels.map(key => (
                                        <MenuItem key={key} value={difficultyLevel[key]}>{difficultyLevel[key]}</MenuItem>
                                    ))
                                }
                                </Select>         
                            </FormControl>
                            <br/>
                            <Button variant="contained" color="primary">
                            Create Question
                            </Button>
                        </Box>
                    </Box>
                </form>
            
        </PageContainer>
    );
}

export default CreateQuestion;