import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import FlagIcon from "@mui/icons-material/Flag";

export default function About() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          backgroundImage: "url('/header.png')",
          backgroundSize: "cover",
          height: "200px",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: "75px",
            fontWeight: "none",
            fontFamily: "Playfair Display",
            pt: 7,
            textShadow: "2px 2px 4px #000000",
          }}
        >
          About us
        </Typography>
      </Box>
      <Grid
        container
        alignItems="center"
        sx={{
          mt: 2,
          p: 2,
        }}
      >
        <Grid
          size={{ xs: 12, md: 5 }}
          width="100%"
          height="350px"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            ml="auto"
            sx={{
              width: "500px",
              height: "350px",
              borderRadius: 10,
              boxShadow: 3,
              backgroundImage: "url('/about.png')",
              backgroundSize: "cover",
            }}
          ></Box>
        </Grid>
        <Grid
          spacing={2}
          ml="auto"
          mr="auto"
          width="100%"
          size={{ xs: 12, md: 6 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            backgroundColor: "secondary.main",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box sx={{ width: "100%", height: "auto" }}>
            <Typography
              variant="body1"
              textAlign="left"
              sx={{ color: "text.dark" }}
            >
              At fimarket, we believe that every application has the potential
              to create a positive impact. Our goal is to ensure that these
              innovations reach a broader audience. Through this platform, we
              aim to inspire collaboration and the exchange of ideas, thereby
              strengthening the connection between technology and the university
              community. Join us in celebrating creativity and entrepreneurship
              as we showcase the remarkable projects developed by our talented
              members.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 6, md: 3 }}
        sx={{
          mt: 5,
          maxWidth: "50%",
          mx: "auto",
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
          backgroundColor: "primary.main",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Our history
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: "text.light", textShadow: "1px 1px #000" }}
        >
          Fimarket was born from the initiative of a group of UNAM students who
          recognized the talent and innovation present in their community. Since
          our inception in 2024, we have worked tirelessly to create a space
          where applications that solve real problems and improve everyday life
          can be showcased and discovered. Over the years, we have grown and
          evolved, integrating new technologies and tools that facilitate
          interaction and access to outstanding projects. Today, we are proud to
          be a reference in promoting university talent, driving a vibrant
          digital ecosystem full of opportunities.
        </Typography>
      </Grid>

      <Box
        maxWidth="xl"
        sx={{
          mt: 5,
          maxWidth: "90%",
          mb: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "secondary.main",
        }}
      >
        <Typography
          variant="h3"
          sx={{ padding: 2, color: "text.dark", fontWeight: "bold" }}
        >
          Our Essence
        </Typography>

        <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#fffff" } }}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large" />}>
            <Typography
              variant="h4"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Mission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: "#4E342E" }}>
              To promote innovation and creativity within the UNAM community by
              providing a platform that showcases applications developed by
              students, alumni, and faculty. We aim to give visibility to these
              projects, ensuring that their positive impact reaches a broader
              audience while fostering collaboration and the exchange of ideas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#ffffff" } }}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large" />}>
            <Typography
              variant="h4"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Vision
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: "#4E342E" }}>
              To be the leading platform for promoting innovative applications
              within the university community, strengthening the digital
              ecosystem of UNAM and contributing to the development of an
              environment that inspires entrepreneurship and creativity. We
              aspire to become a benchmark for technological and social
              collaboration that enhances the talent of our members.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ "&.Mui-expanded": { backgroundColor: "#ffffff" } }}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon fontSize="large" />}>
            <Typography
              variant="h4"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Values
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                border: "1px solid #000000",
                borderRadius: 4,
                padding: 3,
                mb: 2,
                backgroundColor: "primary.main",
              }}
            >
              <SchoolIcon sx={{ mr: 2, color: "secondary.main" }} />
              <Typography variant="body1" sx={{ color: "text.light" }}>
                Innovation: We value and promote creative thinking and the
                search for new solutions to real problems.
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                border: "1px solid #000000",
                borderRadius: 4,
                padding: 3,
                mb: 2,
                backgroundColor: "primary.main",
              }}
            >
              <GroupIcon sx={{ mr: 2, color: "secondary.main" }} />
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Collaboration: We encourage teamwork and the exchange of ideas
                among students, alumni, and faculty to enrich the learning
                experience.
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                border: "1px solid #000000",
                borderRadius: 4,
                padding: 3,
                mb: 2,
                backgroundColor: "primary.main",
              }}
            >
              <PeopleIcon sx={{ mr: 2, color: "secondary.main" }} />
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Inclusivity: We believe in giving a voice to all members of our
                community, ensuring that all applications have the opportunity
                to be seen and used.
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                border: "1px solid #000000",
                borderRadius: 4,
                padding: 3,
                mb: 2,
                backgroundColor: "primary.main",
              }}
            >
              <FlagIcon sx={{ mr: 2, color: "secondary.main" }} />
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Social Impact: We are committed to promoting projects that
                generate a positive impact on society and improve people"s
                quality of life.
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                border: "1px solid #000000",
                borderRadius: 4,
                padding: 3,
                mb: 2,
                backgroundColor: "primary.main",
              }}
            >
              <StarIcon sx={{ mr: 2, color: "secondary.main" }} />
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Excellence: We strive for continuous improvement in our
                initiatives and in the presentation of the projects we support.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
