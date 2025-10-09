import React from "react";

const Policy: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 max-w-4xl text-muted-foreground">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Support Policy
      </h1>

      <p className="text-center text-sm text-gray-500 mb-12">
        Effective Date: October 2025 — One God Alliance
      </p>

      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Legal Disclaimer – Support Contributions
          </h2>
          <p>
            The platform One God is operated as a private, for-profit initiative.<br></br>
            It is not a nonprofit organization, charity, or public foundation* under any local or international law. <br></br>
            Any payment made via the platform’s support tools (such as *Support*, *Subscribe*, or *Pay*)
            is considered a *voluntary financial contribution* made in support of the project’s ongoing mission and development. <br></br>
                <br></br>


             These payments *are not donations, and contributors *are not entitled to tax deductions or charitable receipts. <br></br>

Funds may be used for:<br></br>
• project development and maintenance <br></br>
• marketing and outreach <br></br>
• platform-related costs <br></br>
• personal income or compensation to the project owner <br></br>

By proceeding with payment, contributors acknowledge and agree that: <br></br>
• payments are *non-refundable* <br></br>
• the project owner has full discretion over the use of the funds <br></br>
• no legal claims or expectations of goods/services/deliverables shall arise from the contribution <br></br>

Your support is deeply appreciated and helps expand the project’s positive impact across communities. <br></br>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Policy Updates
          </h2>
          <p>
            We may occasionally update this Policy to reflect new laws or
            practices. The latest version will always appear on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Policy, please
            reach out to:
          </p>
          <p className="mt-2 font-medium text-foreground">
            One God Alliance  
            <br />
            📧 one-god@gmail.com
            <br />
            🌐 https://one-god.co/
          </p>
        </section>
      </div>
    </section>
  );
};

export default Policy;
