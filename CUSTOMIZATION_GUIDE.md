# How to Update Your Portfolio Data

This guide explains how to customize your portfolio with your own information.

## 📍 Main Data File

All portfolio content is stored in: `src/data/resumeData.js`

## 🔧 What You Can Update

### 1. Personal Information
```javascript
personal: {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+91-XXXXXXXXXX",
  location: "Your City, State, Country",
  tagline: "Your Professional Tagline",
  bio: "Your career objective paragraph...",
  objective: "Your profile summary...",
  resumeFile: "Your_Resume_File.docx", // Must be in public/ folder
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername" // Leave empty if not using
  }
}
```

### 2. Technical Skills
```javascript
skills: {
  technical: [
    { 
      name: "Skill Name", 
      level: 85,              // 0-100 proficiency
      category: "Category"    // Frontend, Backend, Programming, Database, Tools, Cloud, Concepts
    }
  ],
  soft: [
    "Soft Skill 1",
    "Soft Skill 2"
  ]
}
```

**Skill Categories:**
- **Programming** - C, C++, Java, Python, etc.
- **Frontend** - HTML, CSS, JavaScript, React, etc.
- **Backend** - PHP, Node.js, Express, etc.
- **Database** - MySQL, MongoDB, PostgreSQL, etc.
- **Tools** - Git, VS Code, XAMPP, etc.
- **Cloud** - AWS, Azure, GCP, etc.
- **Concepts** - DSA, DBMS, OOP, OS, etc.

### 3. Work Experience
```javascript
experience: [
  {
    id: 1,                              // Unique ID
    company: "Company Name",
    position: "Your Position",
    duration: "Month Year - Month Year",
    location: "City, State/Country",
    description: "Brief role description",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["Tech1", "Tech2"]
  }
]
```

### 4. Education
```javascript
education: [
  {
    id: 1,
    degree: "Degree Name",
    institution: "Institution Name",
    duration: "Year - Year",
    location: "City, State",
    grade: "GPA/Percentage/Grade",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

### 5. Projects
```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Short description (1-2 lines)",
    longDescription: "Detailed description (2-3 sentences)",
    technologies: ["Tech1", "Tech2", "Tech3"],
    features: [
      "Feature 1",
      "Feature 2"
    ],
    github: "https://github.com/username/project",
    live: "https://project-demo.com",     // Leave empty if no live demo
    image: "https://image-url.com/image.jpg" // Use Unsplash or placeholder
  }
]
```

**Project Image Sources:**
- Use Unsplash: `https://images.unsplash.com/photo-XXXXXX?w=600&h=400&fit=crop`
- Or placeholder: `https://via.placeholder.com/600x400`

### 6. Certifications
```javascript
certifications: [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    description: "Brief description (optional)"
  }
]
```

### 7. Achievements
```javascript
achievements: [
  "Achievement or highlight 1",
  "Achievement or highlight 2",
  "Achievement or highlight 3"
]
```

## 📁 Updating Your Resume File

1. Place your resume file in the `public/` folder
2. Update the filename in `resumeData.js`:
   ```javascript
   resumeFile: "Your_Resume_Name.docx"
   ```
3. Supported formats: .docx, .pdf

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9',  // Main color
        900: '#0c4a6e',
      },
    },
  },
}
```

## 🖼️ Adding Project Images

### Option 1: Unsplash (Recommended)
1. Go to [Unsplash.com](https://unsplash.com/)
2. Search for relevant images
3. Right-click → Copy Image URL
4. Add to your project:
   ```javascript
   image: "https://images.unsplash.com/photo-XXXXXX?w=600&h=400&fit=crop"
   ```

### Option 2: Local Images
1. Add images to `public/images/` folder
2. Reference in project:
   ```javascript
   image: "/images/your-project.jpg"
   ```

## 📊 Updating Stats Section

Edit `src/components/Stats.jsx` to change the statistics displayed:

```javascript
const stats = [
  {
    icon: <FaBriefcase />,
    number: "4+",
    label: "Your Metric",
    color: "from-blue-500 to-cyan-500"
  }
]
```

## 🌐 Social Media Icons

Social links appear in two places:
1. **Hero Section** - Main social icons
2. **Footer** - Quick links

Both automatically pull from `resumeData.js` → `personal.socialLinks`

To hide a social link, set it to empty string:
```javascript
twitter: ""  // Won't display
```

## ✅ Testing Your Changes

1. Save your changes to `resumeData.js`
2. The dev server will auto-reload
3. Check `http://localhost:5173/` in browser
4. Verify all sections display correctly

## 🐛 Common Issues

### Resume Download Not Working
- Ensure resume file is in `public/` folder
- Check filename matches exactly (case-sensitive)
- Clear browser cache

### Images Not Loading
- Check image URL is accessible
- Try using Unsplash URLs
- Verify local images are in `public/` folder

### Text Overflowing
- Keep descriptions concise
- Use 1-2 lines for project descriptions
- Full details show in modal

## 💡 Tips

- **Keep it concise** - Short, impactful statements work best
- **Update regularly** - Add new projects and skills as you learn
- **Use action verbs** - "Built", "Developed", "Implemented", etc.
- **Quantify achievements** - Use numbers and percentages
- **Proofread** - Check for typos and grammar

## 🎯 Next Steps

After updating your data:
1. Test on different devices (mobile, tablet, desktop)
2. Check both light and dark modes
3. Verify all links work
4. Test resume download
5. Build for production: `npm run build`
6. Deploy to hosting platform (Vercel, Netlify, etc.)

---

Need help? Check the main README.md or create an issue on GitHub.
