const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const contactFile = path.join(__dirname, 'contacts.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields required' });
  }

  const contact = { name, email, subject, message, date: new Date().toISOString() };
  let contacts = [];
  if (fs.existsSync(contactFile)) {
    try {
      contacts = JSON.parse(fs.readFileSync(contactFile, 'utf8'));
    } catch (err) {
      contacts = [];
    }
  }
  contacts.push(contact);
  fs.writeFileSync(contactFile, JSON.stringify(contacts, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
