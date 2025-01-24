import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { HubspotForm } from "@/components/contact/HubspotForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ContactInfo />
            <div className="space-y-6">
              <HubspotForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;