import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import PartnerIcon from "./PartnerIcon";
import { PartnerImages } from "../utils/Client.constants";
import { motion } from "framer-motion";
const ClientImage = () => {
    return (
        <div className="h-screen w-[100vw]  m-auto bg-black">
            <div className="2xl:mr-6 sm:h-[100px]">
                <Box
                    sx={{
                        flexGrow: 1,
                        marginTop: "20px",
                        display: "flex",
                        // backgroundColor: "#ba000d",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginX: "auto",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            // maxWidth: "80vw",
                            marginX: "auto",
                            // background: "#ffffff",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {PartnerImages.map((img) => (
                            <Grid xs={6} sm={3} md={3}>
                                <PartnerIcon imgPath={img.path} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
export default ClientImage;