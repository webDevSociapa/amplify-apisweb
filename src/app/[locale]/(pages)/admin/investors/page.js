"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import toastify

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Investors = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfList, setPdfList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    mainCategory: "",
    subCategory: "",
    pdfFile: null,
  });


  const categoryList = [
    { id: 1, title: "Financials" },
    { id: 2, title: "Board Committees" },
    { id: 3, title: "Corporate Governance" },
    { id: 4, title: "Code Of Conduct" },
    { id: 5, title: "Financial Results" },
    { id: 6, title: "Share Holding Information" },
    { id: 7, title: "Annual Report" },
    { id: 8, title: "Corporate Announcement" },
    { id: 9, title: "Green Initiative" },
    { id: 10, title: "Scheme Of Amalgamation" },
    { id: 11, title: "CSR" },
  ];
  
  
  

  // Fetch PDF data
  const fetchPdfs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/InvestorsData");
      setPdfList(response.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  // Handle File Input
  const handleFileChange = (e) => {
    setFormData({ ...formData, pdfFile: e.target.files[0] });
  };

  // Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Upload Submission
  const handleUpload = async () => {

    try {
      const uploadData = new FormData();
      uploadData.append("title", formData.title);
      uploadData.append("mainCategory", formData.mainCategory);
      uploadData.append("subCategory", formData.subCategory);
      uploadData.append("pdfFile", formData.pdfFile);

      setIsLoading(true);
      const response = await axios.post("/api/InvestorsData", uploadData);
      alert(response.data.message);
      toast.success('pdf upload Successfully'); // Show success toast
      fetchPdfs();
      setOpen(false);
    } catch (error) {
      console.error("Error uploading PDF:", error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this PDF?")) return;

    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/InvestorsData?id=${id}`);
      alert(response.data.message);
      fetchPdfs();
    } catch (error) {
      console.error("Error deleting PDF:", error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 5, background: "rgba(255, 251, 246, 1)" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" sx={{ fontFamily: "jost", fontWeight: 400 }}>
          Investor Documents
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Upload New PDF
        </Button>
      </Box>

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : pdfList.length > 0 ? (
        pdfList.map((pdf) => (
          <Box
            key={pdf._id}
            sx={{
              border: "1px solid #AE844A",
              p: 2,
              mb: 2,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              <strong>{pdf.title}</strong> - {pdf.mainCategory} / {pdf.subCategory}
            </Typography>
            <Box>
              <Button
                variant="text"
                color="primary"
                onClick={() => window.open(pdf.pdfUrl, "_blank")}
              >
                View
              </Button>
              <Button variant="text" color="error" onClick={() => handleDelete(pdf._id)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))
      ) : (
        <Typography>No PDFs found.</Typography>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Upload New PDF</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
         <Select
    fullWidth
    name="mainCategory"
    value={formData.mainCategory}
    onChange={handleChange}
    sx={{ mb: 2 }}
  >
    <MenuItem value="">Select Main Category</MenuItem>
    {categoryList.map((category) => (
      <MenuItem key={category.id} value={category.title}>
        {category.title}
      </MenuItem>
    ))}
  </Select>
          <TextField
            fullWidth
            label="Sub Category"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" component="label" sx={{ mb: 2 }}>
            Choose PDF File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpload} disabled={isLoading}>
            {isLoading ? "Uploading..." : "Upload"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Investors;
