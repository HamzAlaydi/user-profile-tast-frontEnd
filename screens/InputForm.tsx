import React, { FC, ChangeEvent, FormEvent } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Avatar, Snackbar } from "@mui/material";
import { Alert } from "@mui/lab";
// Date Picker
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// style
import styles from "./form.module.css";

interface InputFormProps {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formData: any;
  openTooster: boolean;
}

const InputForm: FC<InputFormProps> = ({
  handleChange,
  handleFileChange,
  handleSubmit,
  formData,
  openTooster,
}) => {
  console.log(formData);

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    openTooster && setOpen(true);
  }, [openTooster]);

  return (
    <Container maxWidth="sm">
      <Grid py={1} container justifyContent="space-around" alignItems="center">
        {/* title */}
        <Grid item>
          <div className={styles.title}>Edit Profile </div>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Avatar */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/D4D03AQGkHxb3GPa61g/profile-displayphoto-shrink_400_400/0/1694696411702?e=1700092800&v=beta&t=ryK7fvPyOA4E_1GLa09CLLVqz7ol8gjUAlplB_l3HV0"
              sx={{ width: 200, height: 200 }}
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              defaultValue={formData.name}
              onChange={handleChange}
            />
          </Grid>
          {/* Bio */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              variant="outlined"
              multiline
              rows={3}
              defaultValue={formData.bio}
              onChange={handleChange}
            />
          </Grid>
          {/* Location */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              variant="outlined"
              defaultValue={formData.location}
              onChange={handleChange}
            />
          </Grid>
          {/* Website */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Website"
              name="website"
              variant="outlined"
              defaultValue={formData.website}
              onChange={handleChange}
            />
          </Grid>
          {/* Join Date */}
          <Grid item xs={12} sm={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Join Date"
                defaultValue={formData.joinDate}
                format="MM-DD-YYYY"
                formatDensity="spacious"
                onChange={(date) =>
                  handleChange({
                    target: {
                      name: "joinDate",
                      value: date,
                    },
                  } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)
                }
                slotProps={{
                  textField: { sx: { width: "100%" }, size: "medium" },
                }}
              />
            </LocalizationProvider>
          </Grid>

          {/* Followers */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Followers"
              name="followers"
              variant="outlined"
              type="number"
              defaultValue={formData.followersCount}
              onChange={handleChange}
            />
          </Grid>
          {/* Following */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Following"
              name="following"
              variant="outlined"
              type="number"
              defaultValue={formData.followingCount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          open={openTooster}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            Updated Successfully!
          </Alert>
        </Snackbar>{" "}
      </form>
    </Container>
  );
};

export default InputForm;
