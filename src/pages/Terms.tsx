import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms and
            Conditions and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at:
          </p>
          <p className="mt-2">
            Email: admin@surgeai.net<br />
            Address:<br />
            SurgeAi<br />
            1309 Coffeen Avenue STE 1200<br />
            Sheridan Wyoming 82801
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software)
            on SurgeAi's website for personal, non-commercial transitory viewing only. This is the grant of
            a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclaimer</h2>
          <p>
            The materials on SurgeAi's website are provided on an 'as is' basis. SurgeAi makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability, fitness
            for a particular purpose, or non-infringement of intellectual property or other violation
            of rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitations</h2>
          <p>
            In no event shall SurgeAi or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising
            out of the use or inability to use the materials on SurgeAi's website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Accuracy of Materials</h2>
          <p>
            The materials appearing on SurgeAi's website could include technical, typographical, or
            photographic errors. SurgeAi does not warrant that any of the materials on its website are
            accurate, complete or current. SurgeAi may make changes to the materials contained on its
            website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Links</h2>
          <p>
            SurgeAi has not reviewed all of the sites linked to its website and is not responsible for
            the contents of any such linked site. The inclusion of any link does not imply endorsement
            by SurgeAi of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications</h2>
          <p>
            SurgeAi may revise these terms of service for its website at any time without notice. By
            using this website you are agreeing to be bound by the then current version of these terms
            of service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of
            Wyoming and you irrevocably submit to the exclusive jurisdiction of the courts in that State
            or location.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;