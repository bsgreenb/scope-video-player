export default function Footer() {
    return (
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} LearnWell. All rights reserved.</p>
        </div>
      </footer>
    );
  }