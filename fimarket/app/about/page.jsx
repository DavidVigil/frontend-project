import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2"; 
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SchoolIcon from '@mui/icons-material/School'; 
import GroupIcon from '@mui/icons-material/Group'; 
import PeopleIcon from '@mui/icons-material/People'; 
import StarIcon from '@mui/icons-material/Star'; 
import FlagIcon from '@mui/icons-material/Flag'; 

export default function About() {
    return (
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            background: "#eeeeee",
        }}>
            <Box sx={{
                py: 2,
                backgroundColor: "#cc0000",
                borderRadius: 2,
                boxShadow: 3
            }}>
                <Image
                    src="/header.png"
                    alt="Header image"
                    height={350}
                    width={680}
                    layout="responsive"
                />
            </Box>

            <Box maxWidth sx={{
                mt: 2,
                borderRadius: 2,
                boxShadow: 3,
                p: 2
            }}>
                <Typography variant="h1" sx={{ color: "#cc0000", fontWeight: "bold" }}>
                    Fimarket
                </Typography>
                <Box sx={{ border: "4px solid #cc0000", width: 250, mb: 1 }} />
                
            </Box>

            <Grid container sx={{
                mt: 2,
                backgroundColor: "#cc0000",
                p: 2,
                borderRadius: 2,
                boxShadow: 3
            }} alignItems="center">
                <Grid size={{ xs: 10, sm: 12, md: 12 }} sx={{ ml:4 }}>
                    <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: "bold" }}>
                        About us
                    </Typography>
                </Grid>
                <Grid spacing={5} size={{ xs: 12, sm: 5, md: 5 }} sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 2,
                }}>
                    <Image
                        src="/about.png"
                        alt="About Us Image"
                        width={500}
                        height={350}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Grid>
                <Grid spacing={2} size={{ xs: 12, sm: 7, md: 7 }} sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 2
                }}>
                    <Typography variant="body1" textAlign="left" sx={{ color: "#ffffff" }}>
                        At fimarket, we believe that every application has the potential to create 
                        a positive impact. Our goal is to ensure that these innovations reach a broader 
                        audience. Through this platform, we aim to inspire collaboration and the exchange 
                        of ideas, thereby strengthening the connection between technology and the university 
                        community. Join us in celebrating creativity and entrepreneurship as we showcase the 
                        remarkable projects developed by our talented members.
                    </Typography>
                </Grid>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{
                mt: 5,
                maxWidth: "50%",
                mx: "auto",
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
                backgroundColor: "#cc0000"
            }}> 
                <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: "bold" }}>
                    Our history
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: "#ffffff" }}>
                    Fimarket was born from the initiative of a group of UNAM students who recognized 
                    the talent and innovation present in their community. Since our inception in 2024, 
                    we have worked tirelessly to create a space where applications that solve real 
                    problems and improve everyday life can be showcased and discovered. Over the years, 
                    we have grown and evolved, integrating new technologies and tools that facilitate 
                    interaction and access to outstanding projects. Today, we are proud to be a reference 
                    in promoting university talent, driving a vibrant digital ecosystem full of opportunities.
                </Typography>
            </Grid>

            <Box maxWidth="xl" sx={{
                mt: 5,
                maxWidth: "90%",
                mb: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#cc0000"
            }}>
                <Typography variant="h3" sx={{ mt: 1, color: "#ffffff", fontWeight: "bold", mb: 2 }}>
                    Our Essence
                </Typography>
                
                <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#fffff" } }}>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large"/>}>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                            Mission
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" sx={{ color: "#4E342E" }}>
                            To promote innovation and creativity within the UNAM community by providing a platform that showcases 
                            applications developed by students, alumni, and faculty. We aim to give visibility to these projects, 
                            ensuring that their positive impact reaches a broader audience while fostering collaboration and the 
                            exchange of ideas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#ffffff" } }}>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large" />}>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                            Vision
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" sx={{ color: "#4E342E" }}>
                            To be the leading platform for promoting innovative applications within the university community, 
                            strengthening the digital ecosystem of UNAM and contributing to the development of an environment 
                            that inspires entrepreneurship and creativity. We aspire to become a benchmark for technological 
                            and social collaboration that enhances the talent of our members.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#ffffff" } }}>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large" />}>
                        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
                            Values
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 2 }}>
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ 
                                border: '1px solid #000000', 
                                borderRadius: 4, 
                                padding: 3, 
                                mb: 2, 
                                backgroundColor: '#cc0000'
                            }}
                        >
                            <SchoolIcon sx={{ mr: 2, color: "#ffffff" }} />
                            <Typography variant="body1" sx={{ color: "#ffffff" }}>
                                Innovation: We value and promote creative thinking and the search for new solutions to real problems.
                            </Typography>
                        </Box>

                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ 
                                border: '1px solid #000000', 
                                borderRadius: 4, 
                                padding: 3, 
                                mb: 2, 
                                backgroundColor: '#cc0000'
                            }}
                        >
                            <GroupIcon sx={{ mr: 2, color: "#ffffff" }} />
                            <Typography variant="body1" sx={{ color: "#ffffff" }}>
                                Collaboration: We encourage teamwork and the exchange of ideas among students, alumni, and faculty to enrich the learning experience.
                            </Typography>
                        </Box>

                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ 
                                border: '1px solid #000000', 
                                borderRadius: 4, 
                                padding: 3, 
                                mb: 2, 
                                backgroundColor: '#cc0000'
                            }}
                        >
                            <PeopleIcon sx={{ mr: 2, color: "#ffffff" }} />
                            <Typography variant="body1" sx={{ color: "#ffffff" }}>
                                Inclusivity: We believe in giving a voice to all members of our community, ensuring that all applications have the opportunity to be seen and used.
                            </Typography>
                        </Box>

                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ 
                                border: '1px solid #000000', 
                                borderRadius: 4, 
                                padding: 3, 
                                mb: 2, 
                                backgroundColor: '#cc0000'
                            }}
                        >
                            <FlagIcon sx={{ mr: 2, color: "#ffffff" }} />
                            <Typography variant="body1" sx={{ color: "#ffffff" }}>
                                Social Impact: We are committed to promoting projects that generate a positive impact on society and improve people's quality of life.
                            </Typography>
                        </Box>

                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ 
                                border: '1px solid #000000', 
                                borderRadius: 4, 
                                padding: 3, 
                                mb: 2, 
                                backgroundColor: '#cc0000'
                            }}
                        >
                            <StarIcon sx={{ mr: 2, color: "#ffffff" }} />
                            <Typography variant="body1" sx={{ color: "#ffffff" }}>
                                Excellence: We strive for continuous improvement in our initiatives and in the presentation of the projects we support.
                            </Typography>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}
