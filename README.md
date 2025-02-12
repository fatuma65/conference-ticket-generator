## Conference Ticket Generator

This application is built with React that allows users to fill out a form, validate inputs, and generate a downloadable ticket upon successful submission. The project emphasizes pixel-perfect implementation, accessibility, and responsive design.

### Features

#### Core Features
##### Form Elements:
- Full Name: Text input for the user's full name.
- Email Address: Email input field.
- Avatar Upload: Users can upload their avatar image, which is stored using Cloudinary or any image hosting service. Only image URLs are submitted.
- Submit Button: Button to submit the form.

##### Form Validation:
This ensures all required fields are filled in before submission.
- Validates email format.
- Accepts only valid image URLs for avatars.
- Displays clear error messages near the respective fields if validation fails.

##### State Persistence:
- Retains user inputs using local storage or IndexedDB, ensuring data is not lost on page refresh.

##### Accessibility:
- All form fields, hints, and error messages are screen-reader accessible.
- All elements are focusable, with clear hover and focus states.
- Supports full keyboard navigation.

##### Ticket Generation:
- Generates and displays a Conference Ticket containing:
- Full Name
- Email Address
- Avatar (displayed as an image from the provided URL)
- The ticket is only generated if the form passes validation.

##### Responsive Design:
- The form and ticket layout adjust seamlessly across different screen sizes.
- Optimized for small screens with proper spacing and stacking.

### Acceptance Criteria

1. Form Validation
- Users must provide all required details before submission.
- The email must be in a valid format.
- Avatar uploads must be handled via Cloudinary or any external image URL submission.
- Display relevant error messages near the respective fields.

2. State Persistence
The form fields should persist user input using local storage or IndexedDB, ensuring data remains intact even if the page is refreshed.

3. Ticket Generation
The generated ticket should display the user’s full name, email, and avatar.
The ticket should only appear when all form validations pass successfully.

4. Accessibility
- All form elements and error messages must be fully accessible and announced by screen readers.
- The application must support complete keyboard navigation.

5. Responsive Design
- The form and generated ticket must be fully responsive and visually optimized for all device sizes.
- Ensure the ticket is clearly visible immediately after submission on both mobile and desktop screens.

### Technologies Used

- React: Frontend framework for building the user interface.
- Cloudinary: For handling image uploads and storing avatar URLs.
- Local Storage: For persisting user input data.
- HTML5/CSS3: For structuring and styling the application.
- JavaScript: For form validation and interactivity.
- Accessibility Tools: Ensures the application is screen-reader friendly and keyboard-navigable.
- jsPDF: For Downloading the ticket as a PDF.

### Installation

1. Clone the Repository:

```bash
git clone https://github.com/your-username/conference-ticket-generator.git
cd conference-ticket-generator
```

2. Install Dependencies:

```bash
npm install
```

3. Set Up Cloudinary:

Create a Cloudinary account and obtain your cloudName and uploadPreset.
Add these credentials to a .env file:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4 Run the Application:

```bash
npm run dev
```

5. Open in Browser:
Visit http://localhost:3000 to view the application.

### Usage

Fill Out the Form:
- Enter your Full Name.
- Provide a valid Email Address.
- Upload an Avatar image (or provide an image URL).
- Submit the Form:
- Click the Submit button.
- If all validations pass, a Conference Ticket will be generated.
- Download the Ticket:
The ticket will display your name, email, and avatar.
You can download the ticket as a PDF.

### Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.