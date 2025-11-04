# Damika Nanayakkara - Portfolio Website

Full-Stack, AI & Web3 Engineer Portfolio

## Features

- **Responsive Design**: Fully responsive Bootstrap-based layout
- **Hot Reloading**: Real-time development with Webpack Dev Server
- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive Elements**: Hover effects and animations with WOW.js
- **Contact Form**: Functional email contact form (Web3Forms)
- **Social Media**: GitHub, LinkedIn, and StackOverflow integration
- **Resume Download**: Direct PDF download link

## Sections

1. **Hero** - Introduction with name, title, and social links
2. **About** - Professional summary and personal details
3. **Services** - Freelance offerings (Full-Stack, AI/ML, Cloud, Web3)
4. **Resume** - Education background and work experience
5. **Achievements & Awards** - Hackathons, competitive programming, academic excellence
6. **Featured Projects** - Highlighted projects including FlashGuard IoT project
7. **Portfolio Gallery** - Complete project showcase
8. **Statistics** - Years of experience, projects, awards, companies
9. **Testimonials** - Feedback from colleagues and mentors
10. **Hobbies** - Personal interests (Music, Chess, Reading, Languages)
11. **Contact** - Contact form and location details

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Project

#### Development Mode (with hot reloading)

To start the development server with hot reloading:

```bash
npm start
```

This will:
- Start the webpack dev server
- Open your default browser automatically
- Watch for changes in HTML, CSS, and JavaScript files
- Automatically refresh the browser when you make changes
- Server runs on http://localhost:3000

#### Production Build

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

#### Simple Viewing (without webpack)

You can also simply open `index.html` directly in your browser, but you won't have hot reloading.

## Project Structure

```
├── index.html              # Main HTML file
├── assets/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── img/               # Images
│   └── fonts/             # Font files
├── src/                   # Source files for webpack
│   └── index.js           # Entry point
├── package.json           # npm configuration
├── webpack.config.js      # Webpack configuration
└── README.md             # This file
```

## Contact Form Setup

The contact form uses **Web3Forms** - a completely free service with no subscription required.

### Quick Setup (2 minutes):

1. Go to https://web3forms.com/
2. Enter your email: damikaanupama@gmail.com
3. Get your free access key (sent to your email)
4. Open `index.html` and replace `YOUR_ACCESS_KEY_HERE` with your access key (around line 485)
5. Done! The form will now send emails to your inbox

📖 **Detailed instructions:** See `WEB3FORMS_SETUP.md`

**Note:** The form won't work until you add your access key!

## Customization

- Update personal information in `index.html`
- Replace images in `assets/img/` folder
- Modify styles in `assets/css/custom.css`
- Update resume PDF in `assets/` folder

## Technologies Used

- HTML5 & CSS3
- Bootstrap 4
- JavaScript (ES6+)
- jQuery
- Webpack 5
- Font Awesome Icons
- WOW.js (animations)
- Nivo Lightbox

## Author

**Damika Anupama Nanayakkara**
- Email: damikaanupama@gmail.com
- GitHub: [@Damika-Anupama](https://github.com/Damika-Anupama)
- LinkedIn: [damika-anupama](https://linkedin.com/in/damika-anupama)
- StackOverflow: [damika](https://stackoverflow.com/users/13336872/damika)

## License

MIT License - feel free to use this template for your own portfolio!
