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
            The platform One God is operated as a private, for-profit initiative.
            <br />
            It is not a nonprofit organization, charity, or public foundation* under any local or international law.
            <br />
            Any payment made via the platform’s support tools (such as *Support*, *Subscribe*, or *Pay*)
            is considered a *voluntary financial contribution* made in support of the project’s ongoing mission and development.
          </p>

          <p>
            These payments *are not donations, and contributors *are not entitled to tax deductions or charitable receipts.
          </p>

          <p>
            Funds may be used for:<br />
            • project development and maintenance<br />
            • marketing and outreach<br />
            • platform-related costs<br />
            • personal income or compensation to the project owner
          </p>

          <p>
            By proceeding with payment, contributors acknowledge and agree that:<br />
            • payments are *non-refundable*<br />
            • the project owner has full discretion over the use of the funds<br />
            • no legal claims or expectations of goods/services/deliverables shall arise from the contribution
          </p>

          <p>
            Your support is deeply appreciated and helps expand the project’s positive impact across communities.
          </p>

          <p>
            Payment processing is handled securely by PayPal. We do not store credit card information.
          </p>

          <p>
            We do not collect any personal information beyond what is required to process your support payment via PayPal or to respond to emails submitted through our contact form.
          </p>

          <p>
            By submitting support via this platform, you acknowledge and agree to this Policy.
          </p>

          <p>
            By using this platform, you acknowledge and agree to this Policy. This Policy governs the relationship between the platform and its supporters, regardless of jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Policy Updates
          </h2>
          <p>
            We may occasionally update this Policy to reflect new laws or practices. The latest version will always appear on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Policy, please reach out to:
          </p>

          <p className="mt-2 font-medium text-foreground">
            One God Alliance<br />
            📧 unitedonegod@gmail.com<br />
            🌐 https://one-god.co/
          </p>
        </section>
      </div>
    </section>
  );
};

export default Policy;
