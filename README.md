# Personal Portfolio Website - Anas Khalid

A modern, responsive personal portfolio website showcasing web development skills, professional experience, and creative projects. This portfolio demonstrates expertise in frontend development, UI/UX design, and financial portfolio management.

## 🌟 Features

### Core Sections
- **About Me** - Personal introduction and professional overview
- **Resume** - Work experience, education, and skills showcase
- **Portfolio** - Project gallery with filtering capabilities
- **Blog** - Article showcase and insights
- **Contact** - Contact form and location map integration

### Interactive Elements
- **Responsive Sidebar** - Collapsible contact information panel
- **Dynamic Navigation** - Smooth page transitions without reload
- **Portfolio Filter** - Category-based project filtering system
- **Testimonials Modal** - Interactive client testimonial viewer
- **Contact Form** - Functional contact form with validation
- **Skills Progress Bars** - Animated skill level indicators

## 🛠️ Tech Stack

### Frontend Technologies
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and responsive design
- **Vanilla JavaScript** - Interactive functionality and DOM manipulation
- **Ion Icons** - Icon library for UI elements
- **Google Fonts** - Poppins font family for typography

### Design Features
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Variables** - Consistent color scheme and theming
- **Smooth Animations** - CSS transitions and hover effects
- **Mobile-First Design** - Responsive across all device sizes
- **Dark Theme** - Professional dark color scheme

## 📁 Project Structure

```
Portfolio-Website-Frontend/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── Admin-Panel/            # (Empty - Future admin features)
└── Assets/                 # Media and resource files
    ├── my-avatar.png       # Profile image
    ├── logo.ico            # Website favicon
    ├── avatar-*.png        # Testimonial avatars
    ├── blog-*.jpg          # Blog post images
    ├── project-*.jpg/.png  # Portfolio project images
    ├── icon-*.svg          # Service icons
    ├── logo-*.png          # Client logos
    └── company-logos/      # Various company brand assets
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Orange-yellow gradient (#FFDB70 to #FBA834)
- **Background**: Dark theme with eerie black variants
- **Text**: White and light gray for optimal contrast
- **Accents**: Jet black borders and smoky black elements

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Responsive Font Sizes**: 11px to 24px across different screen sizes

### Layout Breakpoints
- **Mobile**: < 580px
- **Tablet**: 580px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1250px

## ⚡ JavaScript Functionality

### Core Features

#### 1. Sidebar Toggle
```javascript
// Mobile sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
});
```

#### 2. Testimonials Modal
- Interactive modal system for client testimonials
- Dynamic content loading from testimonial cards
- Overlay with click-outside-to-close functionality

#### 3. Portfolio Filtering
- Category-based project filtering
- Responsive filter buttons and dropdown
- Smooth show/hide animations for filtered items

#### 4. Page Navigation
- Single-page application behavior
- Smooth transitions between sections
- Active state management for navigation links

#### 5. Contact Form Validation
- Real-time form validation
- Submit button state management
- Required field validation

## 📱 Responsive Design

### Mobile Features
- Collapsible sidebar with contact information
- Touch-friendly navigation
- Optimized image sizes and loading
- Mobile-specific layout adjustments

### Desktop Features
- Fixed sidebar with always-visible contact info
- Hover effects and transitions
- Multi-column layouts for better content organization
- Enhanced navigation with larger click targets

## 🎯 Professional Sections

### About Section
- Professional introduction highlighting expertise in Computer Science and Finance
- Service offerings including Web Design, Development, Mobile Apps, and Photography
- Client testimonials with interactive modal system
- Client logo showcase with hover effects

### Resume Section
- **Work Experience**: 
  - Financial Portfolio Manager at Global Trading LLP (2021-2023)
  - Deutsch Trainer - Freelancer (2023-2024)
  - Graphic Designer at CLP (2024-Present)
- **Skills Progress Bars**:
  - German Language (70%)
  - Graphic Design (75%)
  - Portfolio Management (90%)
  - Finance - Derivatives & Equity (60%)
  - Web Design (80%)

### Portfolio Section
- Project filtering by categories (All, Web Design, Applications, Web Development)
- Project showcase with hover effects and overlay information
- Responsive grid layout adapting to screen sizes

### Contact Section
- Interactive Google Maps integration (Lucknow, UP, India)
- Functional contact form with validation
- Professional contact information display

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/Gitanaskhan26/Portfolio-Website-Frontend.git
   cd Portfolio-Website-Frontend
   ```

2. **Open in browser**
   - Open `index.html` directly in your browser, or
   - Use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 📧 Contact Information

- **Email**: anaskhan.ssif@gmail.com
- **Phone**: +91-95062-18998
- **Location**: Lucknow, Uttar Pradesh, India
- **Birthday**: May 26, 2003

## 🔗 Social Links
- Professional social media links available in the sidebar
- LinkedIn, GitHub, and other professional network connections

## 🎨 Assets & Media

### Images
- High-quality project screenshots
- Professional avatar and testimonial photos
- Client logos and brand assets
- Blog post featured images

### Icons
- Ion Icons library for consistent UI elements
- Custom SVG icons for services
- Social media icons with hover effects

## 🌐 Browser Compatibility

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed images and minified resources
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Mobile Optimization**: Touch-friendly interactions and responsive images

## 🔮 Future Enhancements

- **Admin Panel**: Content management system (folder prepared)
- **Blog Functionality**: Dynamic blog post management
- **Contact Form Backend**: Server-side form processing
- **Analytics Integration**: Visitor tracking and insights
- **PWA Features**: Offline functionality and app-like experience

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## ⭐ Acknowledgments

- **Google Fonts** for typography
- **Ion Icons** for iconography
- **Vercel** for hosting platform
- **Design inspiration** from modern portfolio trends

---

**Built with ❤️ by Anas Khalid | Full-Stack Developer & Finance Enthusiast**
