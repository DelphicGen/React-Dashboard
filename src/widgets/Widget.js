import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreateWidget from "./CreateWidget";

function Widget({ data }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <CreateWidget
                data={data.organicSource}
                heading={"Organic Source"}
                details={"This is the details about this  widget"}
            />
            <CreateWidget
                data={data.referralSource}
                heading={"Referral Source"}
                details={"This is the details about this  widget"}
            />

            <CreateWidget
                data={data.directSource}
                heading={"Direct Source"}
                details={"This is the details about this  widget"}
            />
        </Grid>
    </div>
  );
}

export default Widget;
