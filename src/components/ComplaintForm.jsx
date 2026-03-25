import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const RECIPIENT_EMAIL = 'bhumikajaiswal193@gmail.com';

/**
 * Complaint form: Name, Email, Phone, Description.
 * Submits via EmailJS if configured, else opens mailto.
 * Shows success Snackbar and validates required fields.
 */
function ComplaintForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.description.trim()) newErrors.description = 'Complaint description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Complaint from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nComplaint:\n${form.description}`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      // Try EmailJS if user has set env vars (Vite: import.meta.env.VITE_*)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          to_email: RECIPIENT_EMAIL,
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.description,
        }, publicKey);
        setSnackbar({ open: true, message: 'Complaint submitted successfully!', severity: 'success' });
        setForm({ name: '', email: '', phone: '', description: '' });
      } else {
        sendViaMailto();
        setSnackbar({
          open: true,
          message: 'Opening your email client. Please send the draft to complete submission.',
          severity: 'info',
        });
      }
    } catch (err) {
      console.error(err);
      sendViaMailto();
      setSnackbar({
        open: true,
        message: 'Opening your email client. Please send the draft to complete submission.',
        severity: 'info',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 560 }}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        required
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        required
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Complaint Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        error={!!errors.description}
        helperText={errors.description}
        required
        multiline
        rows={4}
        margin="normal"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={submitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        disabled={submitting}
        sx={{ mt: 2 }}
      >
        {submitting ? 'Submitting...' : 'Submit Complaint'}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar((s) => ({ ...s, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ComplaintForm;
