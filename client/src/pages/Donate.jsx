export default function Donate() {

  return (
    <div className="pt-[12%]">
      <div id="contact">
        {/* Page heading and subheading */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="font-semibold text-3xl sm:text-5xl text-blue-800">
            Empowering Women to Soar
          </h2>

          <h3 className="sm:text-lg text-center leading-relaxed">
            Our Charitable Trust is engaged in activities related to Aviation education and
            awareness. We strive to undertake strictly educational, charitable and/or
            scientific activities in alignment with <br className="hidden lg:block"/> The Ninety-Nines, Inc.
            Our endeavour is to build a corpus so that we may be able to provide
            scholarships and support young girls in their journey to become pilots.
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          {/* Bank Detail ----start  */}
          <div className="w-auto h-auto lg:p-6 p-4 bg-gray-300 bg-opacity-60 shadow-lg px-12  backdrop-blur-sm rounded-xl bg-white/30">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Bank Account & GPay Details
            </h2>
            <div className="text-gray-800 px-5">
              <div className="mb-2">
                <span className="font-semibold text-gray-900">Account Name:</span>
                <span className="block text-lg">India Section Ninety-Nines</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-900">Bank Name:</span>
                <span className="block text-lg">HDFC Bank Ltd</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-900">Account Number:</span>
                <span className="block text-lg">50100578715321</span>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-gray-900">IFSC Code:</span>
                <span className="block text-lg">HDFC0000134</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-900">Bank Address:</span>
                <span className="block text-lg">D-23, Defence Colony,<br /> New Delhi - 110024</span>
              </div>
            </div>
          </div>
          {/* Bank Detail ----end  */}
          <div className="w-auto h-auto lg:p-10 p-6 bg-gray-300 bg-opacity-60 shadow-lg backdrop-blur-sm rounded-xl bg-white/30 flex flex-col gap-2">
            <h2 className=" text-lg font-semibold mb-5"><span className="font-bold text-blue-800">For Cheque: </span>Cheques should be drawn in favour of: <br /> India Section Ninety-Nines</h2>
            <h2 className="text-lg font-semibold"><span className="font-bold text-blue-800">NOTE:  </span> Donations to India Section Ninety-Nines are exempt under section 80G of IT Act 1961</h2><br />
            <p>The INDIA SECTION NINETY-NINES Trust was registered in September 2022,  under Section
              12A and 80G of IT Act 1961 (12A Registration No. AACTI1005RE20221; 80G Registration No.
              AACTI1005RF20221).</p>

          </div>
        </div>
      </div>
    </div>
  );
}