// projectsData.js
import {
  expensetracker01,
  expensetracker02,
  expensetracker03,
  expensetracker04,
  expensetracker05,
  expensetracker06,
  multimart01,
  multimart02,
  multimart03,
  portfoliowebsite,
  printflink,
  webtypist,
} from "@/assets/imageindex";

export const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack Budget Planner App built with Angular, .NET Core, and PostgreSQL. Users can track expenses, set savings goals, and generate personalized budget plans. Admins manage categories and control a central budget plan. Features include Google OAuth login, responsive UI, and real-time budget tracking.",
    images: [
      expensetracker01.src,
      expensetracker02.src,
      expensetracker03.src,
      expensetracker04.src,
      expensetracker05.src,
      expensetracker06.src,
    ],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio using Next.js and Tailwind CSS.",
    images: [portfoliowebsite.src],
  },
  {
    title: "Multimart E-commerce Store",
    description:
      "A full-featured e-commerce application built with React on the frontend and Node.js on the backend. The site includes a dynamic product catalog, add-to-cart functionality, a secure checkout page and responsive design for smooth shopping on all devices. Designed with a modern UI and optimized for performance, this project showcases key features of a scalable online store.",
    images: [multimart01.src, multimart02.src, multimart03.src],
  },
  {
    title: "WebTypist",
    description:
      "This website is designed to help users significantly improve their typing speed and accuracy. In today's fast-paced digital world, typing is an essential skill for productivity and communication. Practice regularly, track your progress, and make this platform your go-to resource for developing efficient typing habits.",
    images: [webtypist.src],
  },
  {
    title: "Printflink",
    description:
      "Printflink is an easy-to-use, secure, and efficient solution for quickly converting your PDFs into sharable links. Whether you need to upload your documents for temporary sharing or simply need a fast way to store and distribute PDFs, Printflink has got you covered.",
    features: [
      "Easy File Uploads: Simply drag and drop your PDF or use the browse button to select files from your device.",
      "Instant PDF to Link Conversion: Upload your PDF files, and they are instantly converted to a secure link.",
      "Guaranteed Privacy: Your files are safely stored and automatically deleted after 30 minutes or once the link is opened—100% privacy guaranteed.",
      "Cross-Platform: Access and share your files on any device. Printflink is designed to work seamlessly across desktops and mobile devices.",
    ],
    images: [printflink.src],
    link: "https://printflink.netlify.app/",
  },
];
