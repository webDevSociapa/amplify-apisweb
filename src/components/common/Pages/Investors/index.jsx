"use client";

import PropTypes from "prop-types";
import pdficon1 from "@/assets/images/pdfIcon1.png"
import Image from "next/image";

export default function Investors() {
  return (
    <div className="space-y-4 p-4 w-[80%]">
      {/* Reports Button */}
      <div>
        <button
          className="w-full text-left font-semibold bg-gray-100 px-4 py-2 rounded-md shadow toggle-btn flex justify-between items-center border border-[#835415]"
          onClick={() => toggleCollapse("reportsSection")}
        >
          <span>Reports</span>
          <div className="flex items-center gap-2">
            <span className="dropdown-icon">▼</span>
            <span className="text-sm text-[#835415]">View More</span>
          </div>
        </button>

        {/* Reports Section */}
        <div id="reportsSection" className="hidden mt-3 space-y-4">
          {/* Corporate Governance Reports */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow bg "
              onClick={() => toggleCollapse("corporatePolicies000111")}
            >
              Corporate Governance Reports
              <span className="float-right">▼</span>
            </button>
            <div id="corporatePolicies000111" className="hidden mt-2 overflow-x-auto">
              <table className="w-full text-center border-collapse shadow-md rounded-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 font-bold border">Financial Year</th>
                    <th className="p-3 font-bold border">Download</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { year: 2024, url: "2024/Corporate+Governance+Report.pdf" },
                    { year: 2023, url: "2023/Corporate+Governance+Report.pdf" },
                    { year: 2022, url: "2022/Corporate+Governance+Report.pdf" },
                    { year: 2021, url: "2021/Corporate+Governance+Report.pdf" },
                    { year: 2020, url: "2020/Corporate+Governance+Report.pdf" },
                    { year: 2019, url: "2019/Corporate+Governance+Report.pdf" },
                    { year: 2018, url: "2018/CORPORATE+GOVERNANCE+REPORT.pdf" },
                  ].map(({ year, url }) => (
                    <tr
                      key={year}
                      className={`border ${year % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      <td className="p-3 border">{year}</td>
                      <td className="p-3 border">
                        <a
                          href={`https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Corporate+Goverance/Annual+Corporate+Goverance/${url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Business Responsibility Reports */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("corporatePolicies2")}
            >
              Business Responsibility Reports
              <span className="float-right">▼</span>
            </button>
            <div id="corporatePolicies2" className="hidden mt-2">
              <h6 className="text-gray-700">Not Applicable</h6>
            </div>
          </div>

          {/* CSR Annual Action Plan */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("corporatePolicies3")}
            >
              CSR Annual Action Plan
              <span className="float-right">▼</span>
            </button>
            <div id="corporatePolicies3" className="hidden mt-2">
              {/* You can add content later */}
              <p className="text-sm text-gray-500">Coming Soon</p>
            </div>
          </div>

          {/* Certificate Section */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("corporatePolicies4")}
            >
              Certificate under Reg.7(3) and Reg. 40(10)
              <span className="float-right">▼</span>
            </button>
           <div id="corporatePolicies4" className="hidden mt-2">
  {/* Part A: Regulation 7(3) */}
  <h6 className="font-semibold text-gray-800 mb-2">Part A: Certificate under Regulation 7(3)</h6>
  <table className="w-full border-collapse text-center shadow rounded-md mb-6">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2">Year</th>
        <th className="border p-2">Download</th>
      </tr>
    </thead>
    <tbody>
      {[
        { year: 2018, file: 'Compliance+under+regulation+7(3).pdf' },
        { year: 2019, file: 'Covering_Letter.pdf' },
        { year: 2020, file: 'Covering+Letter.pdf' },
        { year: 2021, file: 'Covering_Letter-7(3).pdf' },
        { year: 2022, file: 'Covering_Letter.pdf' },
        { year: 2023, file: 'Certificate+and+Covering+Letter.pdf' },
        { year: 2024, file: 'Covering+Letter.pdf' }
      ].map(({ year, file }) => (
        <tr key={year} className="border">
          <td className="border p-2">{year}</td>
          <td className="border p-2">
            <a
              href={`https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/7(3)+%26+40(10)/7(3)+%26+40(10)/7(3)/${year}/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={pdficon1} alt="PDF" width={20} className="inline mr-1" />
              Download
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Part B: Regulation 40(10) */}
  <h6 className="font-semibold text-gray-800 mb-2">Part B: Certificate under Regulation 40(10)</h6>
  <table className="w-full border-collapse text-center shadow rounded-md">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2">Year</th>
        <th className="border p-2">Download</th>
      </tr>
    </thead>
    <tbody>
      {[
        { year: 2018, file: 'Certificate+under+Reg+40(9).pdf' },
        { year: 2019, file: 'Covering_Letter.pdf' },
        { year: 2020, file: 'Covering_Letter_sw.pdf' },
        { year: 2021, file: 'Covering_Letter.pdf' },
        { year: 2022, file: 'Covering_Letter.pdf' },
        { year: 2023, file: 'Covring+Letter-40(10).pdf' },
        { year: 2024, file: 'Covering+Letter.pdf' }
      ].map(({ year, file }) => (
        <tr key={year} className="border">
          <td className="border p-2">{year}</td>
          <td className="border p-2">
            <a
              href={`https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/7(3)+%26+40(10)/7(3)+%26+40(10)/40(10)/${year}/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={pdficon1} alt="PDF" width={20} className="inline mr-1" />
              Download
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
          </div>

          </div>
        </div>
      </div>
      {/* Governance Button */}
      <div>
        <button
          className="w-full text-left font-semibold bg-gray-100 px-4 py-2 rounded-md shadow toggle-btn flex justify-between items-center border border-[#835415]"
          onClick={() => toggleCollapse("governanceBtn")}
        >
          <span>Corporate Governance</span>
          <div className="flex items-center gap-2">
            <span className="dropdown-icon">▼</span>
            <span className="text-sm text-[#835415]">View More</span>
          </div>
        </button>

        {/* Reports Section */}
        <div id="governanceBtn" className="hidden mt-3 space-y-4">
          {/* Corporate Governance Reports */}
          <div className="mt-4 space-y-2">
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("CorporateGovernance201")}
            >
              Corporate Policies
              <span className="float-right">▼</span>
            </button>

            <div id="CorporateGovernance201" className="hidden mt-2 overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <tbody>
                  {[
                    {
                      title: "PERFORMANCE EVALUATION POLICY",
                      url: "https://apisindia.com/pdf/PERFORMANCE-EVALUATION-POLICY.pdf",
                    },
                    {
                      title: "POLICY ON PRESERVATION OF DOCUMENTS",
                      url: "https://apisindia.com/pdf/Policy-on-Preservation-of-Documents.pdf",
                    },
                    {
                      title: "POLICY FOR DETERMINING MATERIAL SUBSIDIARY",
                      url: "https://apisindia.com/pdf/POLICY-FOR-DETERMINING-MATERIAL-SUBSIDIARY.pdf",
                    },
                    {
                      title: "FAMILIARISATION PROGRAMME FOR INDEPENDENT DIRECTORS",
                      url: "https://apisindia.com/pdf/Familiarisation-Programme-for-Independent-Directors.pdf",
                    },
                    {
                      title: "POLICY FOR DETERMINATION OF MATERIALITY",
                      url: "https://apisindia.com/pdf/Policy-for-Determination-of-Materiality.pdf",
                    },
                    {
                      title: "RELATED PARTY TRANSACTION POLICY",
                      url: "https://apisindia.com/pdf/Related_Party_Policy.pdf",
                    },
                    {
                      title: "CSR POLICY",
                      url: "https://apisindia.com/pdf/APIS-INDIA-LMITED-CSR-Policy-[165606].pdf",
                    },
                    {
                      title: "NOMINATION AND REMUNERATION POLICY",
                      url: "https://apisindia.com/pdf/NOMINATION-AND-REMUNERATION-POLICY-(for-apis-2016)-[165604].pdf",
                    },
                    {
                      title: "POLICY ON SEXUAL HARASSMENT",
                      url: "https://apisindia.com/pdf/Policy-on-S.H.W-[165601].pdf",
                    },
                    {
                      title: "VIGIL MECHANISM POLICY",
                      url: "https://apisindia.com/pdf/vigil_mechanism_policy.pdf",
                    },
                    {
                      title: "WEBSITE CONTENT ARCHIVAL POLICY",
                      url: "https://apisindia.com/pdf/Website_content_archival_policy.pdf",
                    },
                    {
                      title: "CODE OF CONDUCT",
                      url: "https://apisindia.com/pdf/Code_of_conduct.PDF",
                    },
                    {
                      title: "TERMS AND CONDITIONS OF INDEPENDENT DIRECTORS",
                      url: "https://apisindia.com/pdf/Term-and-condition-of-Independent-Directors.pdf",
                    },
                    {
                      title: "RISK MANAGEMENT POLICY",
                      url: "https://apisindia.com/pdf/Risk-Management-Policy-.pdf",
                    },
                  ].map((doc, index) => (
                    <tr key={index} className="border-b border-blue-900">
                      <td className="px-3 py-2">{doc.title}</td>
                      <td className="px-3 py-2 text-center">
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />

                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Business Responsibility Reports */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("NextcorporatePolicies2")}
            >
              Corporate Governance Reports
              <span className="float-right">▼</span>
            </button>
            <div id="NextcorporatePolicies2" className="hidden mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-center text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Financial Year</th>
                    <th className="border p-2">Q1</th>
                    <th className="border p-2">Q2</th>
                    <th className="border p-2">Q3</th>
                    <th className="border p-2">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">2024</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2024/Q1/CGR-JUNE-2024-REVISED.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2024/Q2/CGR-SEP-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2024/Q3/CGR-DEC-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">-</td>
                  </tr>

                  <tr>
                    <td className="border p-2">2023</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2023/Q1/CGR-APIS-JUNE-2023.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2023/Q2/CGR-APIS-SEP-2023.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2023/Q3/CGR-DEC-APIS-2023.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2023/Q4/CGR-APIS-MAR-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">2022</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2022/Q1/CGR-APIS-JUNE-2022.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2022/Q2/CGR-APIS-SEP-2022.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2022/Q3/CGR-31-12-22-APIS.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2022/Q4/CGR-MARCH-2023-APIS.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">2021</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q1/CGR-JUNE-APIS-2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q2/CGR-APIS-SEP-2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q3/CGR+DEC+APIS+DEC+2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q4/CGR-MARCH-2022-APIS.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">2020</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q1/CGR_APIS_JUNE_2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q2/CGR-SEP-2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q3/CGR-APIS-DEC-2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q4/CGR-APIS_MARCH_2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">2019</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q1/CGR_REPORT_JUNE_2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q2/CGR_SEPTEMBER_2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q3/CGR-DEC-APIS-FINAL.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                  </tr>

                  <tr>
                    <td className="border p-2">2018</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q1/CGR.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q2/CGR_SEP_2018_Revised.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q3/CGR-DECEMBER-2018.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q4/CGR-MARCH-2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  {/* Repeat similarly for 2022 to 2018 */}
                  {/* You can map over a JSON object if needed to simplify this code */}
                </tbody>
              </table>
            </div>
          </div>


          {/* CSR Annual Action Plan */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("NextcorporatePolicies3")}
            >
              Related  party Trasaction
              <span className="float-right">▼</span>
            </button>
            <div id="NextcorporatePolicies3" className="hidden mt-2">
              {/* You can add content later */}
              <table className="w-full text-center border-collapse shadow-md rounded-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="border p-2">Financial Year</th>
                    <th className="border p-2">Q1</th>
                    <th className="border p-2">Q2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">2024</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Related+Party+Transaction/Related+Party+Transaction/2024/Q1/RPT-SEP-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">2023</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Related+Party+Transaction/Related+Party+Transaction/2023/Q1/Relatd+party+transcation-30.09.2023.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Related+Party+Transaction/Related+Party+Transaction/2023/Q2/Related+Party+Transactions-March-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                  </tr>

                  <tr>
                    <td className="border p-2">2022</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Related+Party+Transaction/Related+Party+Transaction/2024/Q1/RPT-SEP-2024.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Related+Party+Transaction/Related+Party+Transaction/2022/Q2/Related+Party+Transaction+Report-APIS-March+31%2C+2023.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  {/* Repeat similarly for 2022 to 2018 */}
                  {/* You can map over a JSON object if needed to simplify this code */}

                </tbody>
              </table>
            </div>
          </div>

          {/* Certificate Section */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("NextcorporatePolicies4")}
            >
              Reconciliation of Share Capital Audit Report
              <span className="float-right">▼</span>
            </button>
            <div id="NextcorporatePolicies4" className="hidden mt-2">
              <h6 className="font-semibold text-gray-800 mb-2">Part A: Certificate under Regulation 7(3)</h6>
              <table className="w-full border-collapse text-center text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Financial Year</th>
                    <th className="border p-2">Q1</th>
                    <th className="border p-2">Q2</th>
                    <th className="border p-2">Q3</th>
                    <th className="border p-2">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">2024</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2024/Q1/Reconciliation+of+Share+Capital+Audit.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2024/Q2/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2024/Q3/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2024/Q4/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">2023</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2023/Q1/Covering+Letter-76.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2023/Q2/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2023/Q3/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2023/Q4/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">2022</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2022/Q1/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2022/Q2/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2022/Q3/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Reconcilation+of+Share+Capital+Audit/Reconcilation+of+Share+Capital+Audit/2022/Q4/Covering+Letter-76.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>


                  <tr>
                    <td className="border p-2">2021</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q1/CGR-JUNE-APIS-2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q2/CGR-APIS-SEP-2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q3/CGR+DEC+APIS+DEC+2021.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2021/Q4/CGR-MARCH-2022-APIS.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">2020</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q1/CGR_APIS_JUNE_2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q2/CGR-SEP-2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2020/Q3/CGR-APIS-DEC-2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q4/CGR-APIS_MARCH_2020.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="border p-2">2019</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q1/CGR_REPORT_JUNE_2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q2/CGR_SEPTEMBER_2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q3/CGR-DEC-APIS-FINAL.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                  </tr>

                  <tr>
                    <td className="border p-2">2018</td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q1/CGR.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q2/CGR_SEP_2018_Revised.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q3/CGR-DECEMBER-2018.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                    <td className="border p-2">
                      <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q4/CGR-MARCH-2019.html" target="_blank" rel="noopener noreferrer">
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>

                  </tr>


                  {/* Repeat similarly for 2022 to 2018 */}
                  {/* You can map over a JSON object if needed to simplify this code */}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/*  Shreholding Infromation */}
      <div>
        <button
          className="w-full text-left font-semibold bg-gray-100 px-4 py-2 rounded-md shadow toggle-btn flex justify-between items-center border border-[#835415]"
          onClick={() => toggleCollapse("shareholdingBtn")}
        >
          <span>
            Shareholder Information
          </span>
          <div className="flex items-center gap-2">
            <span className="dropdown-icon">▼</span>
            <span className="text-sm text-[#835415]">View More</span>
          </div>
        </button>

        {/* Reports Section */}
        <div id="shareholdingBtn" className="hidden mt-3 space-y-4">
          {/* Corporate Governance Reports */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("SharecorporatePolicies000222")}
            >
              Shareholder notices
              <span className="float-right">▼</span>
            </button>
            <div id="SharecorporatePolicies000222" className="hidden mt-2 overflow-x-auto">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("disputecorporatePolicies000222")}
              >
                Dispute Resolution Mechanism
                <span className="float-right">▼</span>
              </button>
              <p id="disputecorporatePolicies000222" className="mb-4 p-4">In case the shareholders/investors have any dispute against the Company and/or its Registrar and Share Transfer Agent (RTA), as per SEBI Circular No. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, read with SEBI Circular No. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/135 dated August 04, 2023, they can file for Online Resolution of Disputes through Securities Market Approach for Resolution through ODR Portal [link - https://smartodr.in]</p>
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("annaulGenralmeeting")}
              >
                Annual General Meeting
                <span className="float-right">▼</span>
              </button>
              <p id="annaulGenralmeeting"></p>
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("extraOrdinaryMeet")}
              >
                A Extra-Ordinary General Meeting
                <span className="float-right">▼</span>
              </button>
              <p id="extraOrdinaryMeet"></p>

              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("postalBallot")}
              >
                Postal Ballots
                <span className="float-right">▼</span>
              </button>
              <p id="postalBallot" className="mb-4 p-2">
                <table className="w-full text-center border-collapse shadow-md rounded-md overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="border p-2"> Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">2025</td>
                      <td className="border p-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Postal+Ballot+Notice.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>


                      <td className="border p-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Term+and+condition+of+appointment+of+ID+(1).PDF" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border p-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Advertisment.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

<td className="border p-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Voting+Results_Signed.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>



                    </tr>




                    {/* Repeat similarly for 2022 to 2018 */}
                    {/* You can map over a JSON object if needed to simplify this code */}

                  </tbody>
                </table>
              </p>
            </div>
          </div>
          {/*  */}
          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Reminder+for+KYC+Compliance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              KYC details and shareholder Information
              <span className="float-right">▼</span>
            </a>
          </div>

          {/* CSR Annual Action Plan */}
          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Form_ISR-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              Form ISR-1
              <span className="float-right">▼</span>
            </a>
          </div>
          {/* Certificate Section */}
          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Form_ISR-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              Form ISR-2
              <span className="float-right">▼</span>
            </a>
          </div>
          {/* Form Isr */}
          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Form_ISR-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              Form ISR-3
              <span className="float-right">▼</span>
            </a>
          </div>

          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Form+No.+SH-13.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              Form No. SH-13
              <span className="float-right">▼</span>
            </a>
          </div>


          <div>
            <a
              href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Form+No.+SH-14.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
            >
              Form No. SH-14
              <span className="float-right">▼</span>
            </a>
          </div>
        </div>
      </div>
      {/* Annoucements  */}

      <div>
        <button
          className="w-full text-left font-semibold bg-gray-100 px-4 py-2 rounded-md shadow toggle-btn flex justify-between items-center border border-[#835415]"
          onClick={() => toggleCollapse("announcemtns")}
        >
          <span>Announcements</span>
          <div className="flex items-center gap-2">
            <span className="dropdown-icon">▼</span>
            <span className="text-sm text-[#835415]">View More</span>
          </div>
        </button>

        {/* Reports Section */}
        <div id="announcemtns" className="hidden mt-3 space-y-4">
          {/* Up to March 2024 Section */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("announcements21")}
            >
              up to March 2024
              <span className="float-right">▼</span>
            </button>

            {/* Embedded Table - No Additional Collapse */}
            <div id="announcements21" className="mt-3">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b-2 border-[#003366]">
                    <td>AGM-Proceedings</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/AGM-Proceedings.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Annual-Secretarial-Compliance-Report</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Annual-Secretarial-Compliance-Report.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Corporate-Annoucement <br/> Product-Launch210124</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Covering_Letter.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Disclosure_Calender_of_Event <br/> _of_Postal_Ballot</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Disclosure_Calender_of_Event_of_Postal_Ballot.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Intimation_for_appointment <br/> _of_Statutory_Auditor</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Intimation_for_appointment_of_Statutory_Auditor.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Intimation_for_panelty</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Intimation_for_panelty.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Intimation_under <br/> _Reg.30-Appointment_of_Director</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Intimation_under_Reg.30-Appointment_of_Director.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("announcementsAfterMarch")}
            >
              After March 2024
              <span className="float-right">▼</span>
            </button>

            {/* Embedded Table - No Additional Collapse */}
            <div id="announcementsAfterMarch" className="mt-3">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b-2 border-[#003366]">
                    <td>Corporate-Annoucement-Product-Launch</td>
                    <td>
                      <a
                        href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/corporate_announcement/Corporate-Annoucement-Product-Launch210124.pdf"
                        target="_blank"
                      >
                        <Image src={pdficon1} alt="PDF" width="30" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Disclousre */}
      <div>
        <button
          className="w-full text-left font-semibold bg-gray-100 px-4 py-2 rounded-md shadow toggle-btn flex justify-between items-center border border-[#835415]"
          onClick={() => toggleCollapse("disclosure21")}
        >
          <span>

            Disclosures Under Regulation 46 of SEBI (LODR) Regulations, 2015

          </span>
          <div className="flex items-center gap-2">
            <span className="dropdown-icon">▼</span>
            <span className="text-sm text-[#835415]">View More</span>
          </div>
        </button>

        {/* Reports Section */}
        <div id="disclosure21" className="hidden mt-3 space-y-4">
          {/* Corporate Governance Reports */}
          <div>
            <button
              className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow"
              onClick={() => toggleCollapse("detailsOfBussiness")}
            >

              DETAILS OF BUSINESS

              <span className="float-right">▼</span>
            </button>

            <p id="detailsOfBussiness" className="p-4 mx-4">Apis India Limited is the third generation of Entrepreneurs with extensive hands on knowledge of the trade. We hold an ISO – 22000, a certification for the documented procedures that applies to Food Safety framed by International body. We have also got ORGANIC, TUV, USFDA, KOSHER, EIC, APEDA, FMCG certification. We have won numerous industry and Government of India awards for Honey Exports. We are ISO 22000 certified by Intertek, which is a documented procedure that applies to food Safety Management System framed by International body.

              Apis India is one of the leaders in the field of organized honey trade in India. With our world class in-house facilities for testing lab, we do the processing and filtration for honey. We have state-of-the-art manufacturing facilities spread over 7 acres in Rorkee, with a capacity to process over 100 tonnes of honey per day.

              With a mission to make pure and natural products a part of consumers’ everyday life, our company has also forayed into several other products like tea, cookies, pickles, jam, dates & preserves. This step was taken considering the changing purchase dynamics & growing need of the quality branded packaged products.

              Apis India also provides specialized honey, which comprises ginger, lemon, organic, honey with nuts, and honey with comb. This variety bagged Numerous International Industry and Government Honey Exports. Apis India products have been benchmarked to meet all European Union and other International Standards.</p>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/MOA+%26+AOA_APIS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                Memorandum of Association and Articles of Association
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareholderInformation/Brief+Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                Brief profile of board of directors including directorship and full-time positions in body corporates
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("compositionDis21")}
              >
                COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS
                <span className="float-right">▼</span>
              </button>

              {/* Tabular Content shown/hidden via toggleCollapse */}
              <div id="compositionDis21" className="hidden mb-4 p-2">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b-2 border-blue-900">
                      <td className="py-2">Audit Committee</td>
                      <td>
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/AuditCommitteeComposition.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b-2 border-blue-900">
                      <td className="py-2">Corporate Social Responsibility Committee</td>
                      <td>
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/CSR+Composition.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b-2 border-blue-900">
                      <td className="py-2">Nomination and Remuneration Committee</td>
                      <td>
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/NRC+Composition.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b-2 border-blue-900">
                      <td className="py-2">Stakeholders Relationship Committee</td>
                      <td>
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/SRC+Composition.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/Code_of_conduct+(3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >

                CODE OF CONDUCT OF BOARD OF DIRECTORS AND SENIOR MANAGEMENT PERSONNE

                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/vigil_mechanism_policy+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                WHISTLE BLOWER POLICY
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/NOMINATION-AND-REMUNERATION-POLICY-(for-apis-2016)-%5B165604%5D+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/Related_Party_Policy+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                RELATED PARTY TRANSACTIONS POLICY
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/POLICY-FOR-DETERMINING-MATERIAL-SUBSIDIARY+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                MATERIAL SUBSIDIARIES POLICY
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                FAMILIARIZATION PROGRAMME
                <span className="float-right">▼</span>
              </a>
            </div>

            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("disclousereEmail21")}
              >
                EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS
                <span className="float-right">▼</span>
              </button>

              <div id="disclousereEmail21" className="hidden mb-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Box 1 */}
                  <div className="border-2 border-red-400 bg-red-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Registered Office</h3>
                    <p>
                      18/32, East Patel Nagar<br />
                      New Delhi 110 008 India<br /><br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="border-2 border-green-400 bg-green-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Company Secretary/Compliance Officer</h3>
                    <p>
                      MR. Amit Anand<br />
                      Company Secretary<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 3 */}
                  <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Investor Grievances</h3>
                    <p>
                      MR. Amit Anand<br />
                      18/32, East Patel Nagar, New Delhi<br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="md:col-span-2 lg:col-span-1 border-2 border-blue-400 bg-blue-50 rounded-lg p-5 mt-4">
                    <h3 className="text-lg font-semibold">Registrar and Transfer Agent Details</h3>
                    <p>
                      Skyline Financial Services Pvt Ltd.<br />
                      D-153 A, First Floor, Okhla Industrial Area, Phase-1, New Delhi-110020<br />
                      Telephone No: +91-11-43206666
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("disclousreGrienvane")}
              >
                CONTACT INFORMATION OF THE DESIGNATED PERSONS OF THE LISTED ENTITY WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES

                <span className="float-right">▼</span>
              </button>

              <div id="disclousreGrienvane" className="hidden mb-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Box 1 */}
                  <div className="border-2 border-red-400 bg-red-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Registered Office</h3>
                    <p>
                      18/32, East Patel Nagar<br />
                      New Delhi 110 008 India<br /><br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="border-2 border-green-400 bg-green-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Company Secretary/Compliance Officer</h3>
                    <p>
                      MR. Amit Anand<br />
                      Company Secretary<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 3 */}
                  <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Investor Grievances</h3>
                    <p>
                      MR. Amit Anand<br />
                      18/32, East Patel Nagar, New Delhi<br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="md:col-span-2 lg:col-span-1 border-2 border-blue-400 bg-blue-50 rounded-lg p-5 mt-4">
                    <h3 className="text-lg font-semibold">Registrar and Transfer Agent Details</h3>
                    <p>
                      Skyline Financial Services Pvt Ltd.<br />
                      D-153 A, First Floor, Okhla Industrial Area, Phase-1, New Delhi-110020<br />
                      Telephone No: +91-11-43206666
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("financailInformation")}
              >
                FINANCIAL INFORMATION
                <span className="float-right">▼</span>
              </button>

              <div id="financailInformation">

                <div className="mb-4 p-2">
                  <h5>NOTICE OF MEETING OF THE BOARD OF DIRECTORS WHERE FINANCIAL RESULTS SHALL BE DISCUSSED</h5>
                  <div className="">
                    <table className="w-full border-collapse text-center text-sm">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border p-2">Financial Year</th>
                          <th className="border p-2">Q1</th>
                          <th className="border p-2">Q2</th>
                          <th className="border p-2">Q3</th>
                          <th className="border p-2">Q4</th>
                        </tr>
                      </thead>
                      <tbody>

                         <tr>
                          <td className="border p-2">2025-2026</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Notice+of+Board+Meeting_Stock+Exchange.pdf" target="_blank" rel="noopener noreferrer">

                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">2024-2025</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/NOTICE+OF+MEETING+OF+THE+BOARD/Notice+of+Board+Meeting/Notice+of+Board+Meeting/2024-25/Q1/Notice+of+Board+Meeting_Stock+Exchange.pdf" target="_blank" rel="noopener noreferrer">

                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/NOTICE+OF+MEETING+OF+THE+BOARD/Notice+of+Board+Meeting/Notice+of+Board+Meeting/2024-25/Q2/Notice+of+Board+Meeting.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/NOTICE+OF+MEETING+OF+THE+BOARD/Notice+of+Board+Meeting/Notice+of+Board+Meeting/2024-25/Q3/Notice+of+Board+Meeting.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Notice+of+Board+Meeting_Stock+Exchange.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2023-2024</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q1+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q2+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q3+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q4+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2022</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q1+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q2+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q3+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q4+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>


                        <tr>
                          <td className="border p-2">2020-2021</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q1+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q2+Results.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q3+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q4+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2019-2020</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q1+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q2+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q3+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q4+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2019</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q1/CGR_REPORT_JUNE_2019.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q2/CGR_SEPTEMBER_2019.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2019/Q3/CGR-DEC-APIS-FINAL.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                          <td className="border p-2">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                        </tr>

                        <tr>
                          <td className="border p-2">2018</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q1/CGR.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q2/CGR_SEP_2018_Revised.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q3/CGR-DECEMBER-2018.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Quarterly+Corporate+Goverance/Quarterly+Corporate+Goverance/2018/Q4/CGR-MARCH-2019.html" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                        </tr>


                        {/* Repeat similarly for 2022 to 2018 */}
                        {/* You can map over a JSON object if needed to simplify this code */}

                      </tbody>
                    </table>
                  </div>
                </div>

                <div className=" mb-4 p-2">
                  <h5>FINANCIAL RESULTS, ON CONCLUSION OF THE MEETING OF THE BOARD OF DIRECTORS WHERE THE FINANCIAL RESULTS WERE APPROVED</h5>
                  <div className="noticeOfMeetingBoard">
                    <table className="w-full border-collapse text-center text-sm">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border p-2">Financial Year</th>
                          <th className="border p-2">Q1</th>
                          <th className="border p-2">Q2</th>
                          <th className="border p-2">Q3</th>
                          <th className="border p-2">Q4</th>
                        </tr>
                      </thead>
                      <tbody>


                          <tr>
                          <td className="border p-2">2025-2026</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Outcome+of+the+Board+Meeting.pdf" target="_blank" rel="noopener noreferrer">

                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          
                        </tr>
                        <tr>
                          <td className="border p-2">2024-2025</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2025/Outcome+of+Board+Meeting+(1).pdf" target="_blank" rel="noopener noreferrer">

                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2025/Q1+Results_____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2025/Outcome+of+Board+Meeting.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2025/Outcome+of+Board+Meeting+(4).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2023-2024</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q1+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q2+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q3+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q4+Results____.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2022-2023</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2022-2023/Q1+Results___.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2022-2023/Q2+Results___.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2022-2023/Q3+Results___.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2022-2023/Q4+Results___.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>


                        <tr>
                          <td className="border p-2">2021-2022</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q1+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q2+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q3+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2021-2022/Q4+Results__.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2020-2021</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q1+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q2+Results.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q3+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q4+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-2">2019-2020</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q1+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q2+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q3+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q4+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                        </tr>

                        <tr>
                          <td className="border p-2">2018-2019</td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2018-19/Outcome_of_the_Board_Meeting_final.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2018-19/Results_December.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2018-19/Results_September.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                          <td className="border p-2">
                            <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2018-19/Results-June.pdf" target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>

                        </tr>


                        {/* Repeat similarly for 2022 to 2018 */}
                        {/* You can map over a JSON object if needed to simplify this code */}

                      </tbody>
                    </table>
                  </div>


                </div>

                {/*  */}


                <div className="mb-4 p-2">
                  <h5 className="text-base  mb-2">
                    COMPLETE COPY OF THE ANNUAL REPORT INCLUDING BALANCE SHEET PROFIT AND LOSS ACCOUNT, DIRECTORS REPORT, CORPORATE GOVERNANCE REPORT ETC
                  </h5>

                  <div className="noticeOfMeetingBoard overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 text-sm">
                      <tbody>
                        {[
                          {
                            year: "2023-2024",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report-2023-24_FINAL+(1).pdf"
                          },
                          {
                            year: "2022-2023",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-2023.pdf"
                          },
                          {
                            year: "2021-2022",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report+2021-22.pdf"
                          },
                          {
                            year: "2020-2021",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-2020-21-Final.pdf"
                          },
                          {
                            year: "2019-2020",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report-2020.pdf"
                          },
                          {
                            year: "2018-2019",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report+Final+2018-19.pdf"
                          },
                          {
                            year: "2017-2018",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-APIS-2017.pdf"
                          },
                          {
                            year: "2015-2016",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Final-Annual-Report-2015-16-(1).pdf"
                          },
                          {
                            year: "2014-2015",
                            link: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-2014-15.pdf"
                          }
                        ].map((report, index) => (
                          <tr key={index} className="border-b border-blue-900">
                            <td className="py-2 px-4">Annual Report {report.year}</td>
                            <td className="py-2 px-4">
                              <a href={report.link} target="_blank" rel="noopener noreferrer">
                                <Image src={pdficon1} alt="PDF" width="30" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("shareholdingPattern0210")}
              >
                SHAREHOLDING PATTERN
                <span className="float-right">▼</span>
              </button>

              <div id="shareholdingPattern0210" className="hidden mb-4 p-2 overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-center text-sm border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">Financial Year</th>
                      <th className="border px-4 py-2">Q1</th>
                      <th className="border px-4 py-2">Q2</th>
                      <th className="border px-4 py-2">Q3</th>
                      <th className="border px-4 py-2">Q4</th>
                    </tr>
                  </thead>
                  <tbody>

 <tr>
                      <td className="border px-4 py-2">2025-2026</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/SHP-JUNE-2025.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      
                    </tr>


                    <tr>
                      <td className="border px-4 py-2">2024-2025</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+June%2C+2024.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+Sep%2C+2024.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/SHP-APIS-DEC-2024.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                       <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Shareholding+Pattern.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                       
                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2023-2024</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+September%2C+2023.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2024/Q2+Results____.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+December%2C+2023.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+March%2C+2024.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2022-2023</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+June%2C+2022.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding_Pattern_September_2022.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+December%2C+2022.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>


                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+March%2C+2023.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                    </tr>


                    <tr>
                      <td className="border px-4 py-2">2020-2021</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+June%2C+2020.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+Sep%2C+2021.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+December%2C+2020.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>


                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern-MAR-2021.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2020-2019</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+JUNE%2C+2019.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2020-21/Q2+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+DEC%2C+2019.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>


                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/shareHoldingPattern/Shareholding+Pattern+for+the+Quarter+ended+March%2C+2020.html" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2019-2020</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q1+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q2+Results+(1).pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q3+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>


                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/financial_Results/2019-20/Q4+Results+(2).pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>





            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("detailsOfAgreement")}
              >
                DETAILS OF AGREEMENTS ENTERED INTO WITH THE MEDIA COMPANIES AND/OR THEIR ASSOCIATES
                <span className="float-right">▼</span>
              </button>

              <div id="detailsOfAgreement" className="hidden mb-4 p-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("analysisInstrute")}
              >
                SCHEDULE OF ANALYSTS OR INSTITUTIONAL INVESTORS MEET AND PRESENTATIONS MADE BY THE COMPANY TO ANALYSTS OR INSTITUTIONAL
                <span className="float-right">▼</span>
              </button>

              <div id="analysisInstrute" className="hidden mb-4 p-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("investorsErning")}
              >
                INVESTORS AND AUDIO/VIDEO AND TRANSCRIPTS OF POST EARNINGS/QUARTERLY CALLS
                <span className="float-right">▼</span>
              </button>

              <div id="investorsErning" className="hidden mb-4 p-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("newNameOldName")}
              >
                NEW NAME AND THE OLD NAME OF THE LISTED FOR A CONTINUOUS PERIOD OF ONE YEAR, FROM THE DATE
                <span className="float-right">▼</span>
              </button>

              <div id="newNameOldName" className="hidden mb-4 p-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>



            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("newspaperPub")}
              >
                NEWSPAPER PUBLICATION PURSUANT TO REGULATION 47 (1)
                <span className="float-right">▼</span>
              </button>

              <div id="newspaperPub" className="hidden mb-4 p-2 overflow-x-auto">
                <div className="mb-4">
                  <div className="mb-2 font-semibold">
                    NOTICE OF MEETING OF THE BOARD OF DIRECTORS WHERE FINANCIAL RESULTS SHALL BE DISCUSSED
                  </div>
                  <select
                    id="yearSelector"
                    className="border border-gray-300 rounded px-3 py-1"
                  >
                    <option value="all">All Years</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2022-2023">2022-2023</option>
                    <option value="2021-2022">2021-2022</option>
                    <option value="2020-2021">2020-2021</option>
                    <option value="2019-2020">2019-2020</option>
                    <option value="2018-2019">2018-2019</option>
                    <option value="2017-2018">2017-2018</option>
                    <option value="2016-2017">2016-2017</option>
                    <option value="2015-2016">2015-2016</option>
                    <option value="2014-2015">2014-2015</option>
                  </select>
                </div>

                <table className="min-w-full border border-gray-300 text-center text-sm border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">Financial Year</th>
                      <th className="border px-4 py-2">Q1</th>
                      <th className="border px-4 py-2">Q2</th>
                      <th className="border px-4 py-2">Q3</th>
                      <th className="border px-4 py-2">Q4</th>
                    </tr>
                  </thead>
                  <tbody>

                  
 <tr>
                      <td className="border px-4 py-2">2025-2026</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2024-2025</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2024-25/Q1/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2024-25/Q2/Intimation+under+Reg.30-publication+of+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2024-25/Q3/Intimation+under+Reg.30-publication+of+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2023-2024</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2023-24/Q1/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2023-24/Q2/Intimation+under+Reg.30-publication+of+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2023-24/Q3/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2023-24/Q4/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2022-2023</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2022-23/Q1/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2022-23/Q2/Intimation+under+Reg.30-publication+of+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2022-23/Q3/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2022-23/Q4/Newspaper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="border px-4 py-2">2021-2022</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2021-22/Q1/Intimation_under_Reg.30-Newspeper_Advertisement-Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2021-22/Q2/Intimation+under+Reg.30-publication+of+Results.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2021-22/Q3/Intimation+under+Reg.30-Newspeper+Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2021-22/Q4/Intimation_of_Publication_under_Reg-30_sw.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>



                    <tr>
                      <td className="border px-4 py-2">2020-2021</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2020-21/Q1/Covering+Letter.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2020-21/Q2/Newspaper+Publication.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2020-21/Q3/Intimation_under_Reg.30-Newspeper_Advertisement_sw.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2020-21/Q4/Newspaper+Publication.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2019-2020</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2019-20/Q1/Intimation_under_Reg-30.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2019-20/Q2/Newspaper+Publication.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2019-20/Q3/Intimation_under_Reg.30-Newspeper_Advertisement.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2019-20/Q4/Newspaper+Publication.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>


                    <tr>
                      <td className="border px-4 py-2">2018-2019</td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2018-19/Q1/Intimation_under_Reg.30-Newspeper_Advertisement_sw.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2018-19/Q2/Intimation_under_Reg.30-Newspeper_Advertisement_sw.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2018-19/Q3/Intimation_under_Reg.30-Newspeper_Advertisement_sw.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        <a href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Newspaper+Publication/2018-19/Q4/Intimation_under_Reg-30.pdf" target="_blank" rel="noopener noreferrer">
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>



            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("creditRating")}
              >
                Credit Rating
                <span className="float-right">▼</span>
              </button>

              <div id="creditRating" className="hidden mt-2 overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-center text-sm border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">Financial Year</th>
                      <th className="border px-4 py-2">Year</th>
                    </tr>
                  </thead>
                  <tbody>

                      <tr>
                      <td className="border px-4 py-2">2025</td>
                      <td className="border px-4 py-2">
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/Disclosure+of+Credit+Rating.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2024</td>
                      <td className="border px-4 py-2">
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Credit+Rating/Credit+Rating/2024/Covering+Letter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2022</td>
                      <td className="border px-4 py-2">
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Credit+Rating/Credit+Rating/2022/Intimation+under+Reg.30-Credit+Rating.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2021</td>
                      <td className="border px-4 py-2">
                        <a
                          href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Credit+Rating/Credit+Rating/2021/Covering_Letter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={pdficon1} alt="PDF" width="30" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("authedCompany")}
              >
                AUDITED FINANCIAL STATEMENTS OF SUBSIDIARY COMPANIES
                <span className="float-right">▼</span>
              </button>

              <div id="authedCompany" className="hidden mt-2 overflow-x-auto">
                {/* Anantadrishti */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-1">APIS Subsidiary Financials - Anantadrishti</h5>
                  <p className="mb-3">Subsidiary Financials</p>

                  <table className="min-w-full border border-gray-300 text-sm border-collapse text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Downloads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          title: "Balance Sheet - 31.03.2018 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet_Anantadrishti_2018.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2019 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet_Anantadrishti_Anantadrishti_2019.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2020 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Standalone+Balance+Sheet.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2021 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet21.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2022 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet22.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2023 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance-Sheet-Anantadrishti-Smart.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2024 - Anantadrishti",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet24.pdf",
                        },
                      ].map(({ title, url }, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2 text-left">{title}</td>
                          <td className="border px-4 py-2">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              View/Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Nature's Family Tree Foods Private Limited */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-1">APIS Subsidiary Financials - Nature's Family Tree Foods Private Limited</h5>
                  <p className="mb-3">Subsidiary Financials</p>

                  <table className="min-w-full border border-gray-300 text-sm border-collapse text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Downloads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          title: "Balance Sheet - 31.03.2020 - Nature's Family Tree Foods Pvt. Ltd.",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet-Nature+Family-2022.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2021 - Nature's Family Tree Foods Pvt. Ltd.",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance-Sheet-NFTPL-2023.pdf",
                        },
                        {
                          title: "Balance Sheet - 31.03.2022 - Nature's Family Tree Foods Pvt. Ltd.",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/subsicidry_companies/Balance+Sheet-Nature+Family+2024.pdf",
                        },

                      ].map(({ title, url }, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2 text-left">{title}</td>
                          <td className="border px-4 py-2">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              View/Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("secreterialComplience")}
              >
                SECRETARIAL COMPLIANCE REPORT AS PER SUB-REGULATION (2) OF REGULATION 24A
                <span className="float-right">▼</span>
              </button>

              <div id="secreterialComplience" className="hidden mt-2 overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm border-collapse text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2">Financial Year</th>
                      <th className="border px-4 py-2">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[

                       {
                        year: "2025",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/APIS+India+Compliance+Report+2025.pdf",
                      },
                      {
                        year: "2024",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2024/Annual+Secretarail+Compliance+Report.pdf",
                      },
                      {
                        year: "2023",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2023/Annual+Secretarail+Compliance+Report.pdf",
                      },
                      {
                        year: "2022",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2022/Annual+Secretarail+Compliance+Report.pdf",
                      },
                      {
                        year: "2021",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2021/Annual+Secretarail+Compliance+Report.pdf",
                      },
                      {
                        year: "2020",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2020/Annual+Secrretarial+Compliance+Report.pdf",
                      },
                      {
                        year: "2019",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Annual+Secretarial+Compliance+Report/Secretarial+Compliance+Report/2019/Annual+Secretarial+Compliance+Report.pdf",
                      },
                    ].map(({ year, url }, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{year}</td>
                        <td className="border px-4 py-2">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Image src={pdficon1}
                              alt="PDF"
                              width={30}
                              className="mx-auto"
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>



            <div>
              <a
                href="https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/Disclosures/Policy-for-Determination-of-Materiality+(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200"
              >
                POLICY FOR DETERMINATION OF MATERIALITY OF EVENTS OR INFORMATION
                <span className="float-right">▼</span>
              </a>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("determiningMaterility")}
              >
                DISCLOSURE OF CONTACT DETAILS OF KEY MANAGERIAL PERSONNEL WHO ARE AUTHORIZED FOR THE PURPOSE OF <br />DETERMINING MATERIALITY OF AN EVENT OR INFORMATION AND FOR THE PURPOSE OF MAKING DISCLOSURES TO STOCK EXCHANGE(S)
                <span className="float-right">▼</span>
              </button>

              <div id="determiningMaterility" className="hidden mb-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Box 1 */}
                  <div className="border-2 border-red-400 bg-red-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Registered Office</h3>
                    <p>
                      18/32, East Patel Nagar<br />
                      New Delhi 110 008 India<br /><br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="border-2 border-green-400 bg-green-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Company Secretary/Compliance Officer</h3>
                    <p>
                      MR. Amit Anand<br />
                      Company Secretary<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 3 */}
                  <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold">Investor Grievances</h3>
                    <p>
                      MR. Amit Anand<br />
                      18/32, East Patel Nagar, New Delhi<br />
                      Telephone No: +91-11-43206666<br />
                      Fax No: +91-11-43559111<br />
                      Email: <a href="mailto:amit@apisindia.com" className="text-blue-600 underline">amit@apisindia.com</a>
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="md:col-span-2 lg:col-span-1 border-2 border-blue-400 bg-blue-50 rounded-lg p-5 mt-4">
                    <h3 className="text-lg font-semibold">Registrar and Transfer Agent Details</h3>
                    <p>
                      Skyline Financial Services Pvt Ltd.<br />
                      D-153 A, First Floor, Okhla Industrial Area, Phase-1, New Delhi-110020<br />
                      Telephone No: +91-11-43206666
                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("regulation300")}
              >
                DISCLOSURES UNDER SUB-REGULATION (8) OF REGULATION 30 OF THESE REGULATIONS
                <span className="float-right">▼</span>
              </button>

              <div id="regulation300" className="hidden mt-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("DEVIATION211")}
              >
                STATEMENTS OF DEVIATION(S) OR VARIATION(S) AS SPECIFIED IN REGULATION 32 OF THESE REGULATIONS
                <span className="float-right">▼</span>
              </button>

              <div id="DEVIATION211" className="hidden mt-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("DISTRIBUTION2100")}
              >
                DIVIDEND DISTRIBUTION POLICY
                <span className="float-right">▼</span>
              </button>

              <div id="DISTRIBUTION2100" className="hidden mt-2 overflow-x-auto">
                <p>No Data</p>
              </div>
            </div>


            <div className="mt-2">
              <button
                className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                onClick={() => toggleCollapse("annualReport")}
              >
                ANNUAL Report
                <span className="float-right">▼</span>
              </button>

              <div id="annualReport" className="hidden mt-2 overflow-x-auto">
                <table className="min-w-full border-collapse text-sm text-left">
                  <tbody>
                    {[
                      {
                        title: "Annual Report 2024-2025",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/Annual+Report+2024-25+(1).pdf",
                      },
                      {
                        title: "Annual Report 2023-2024",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report-2023-24_FINAL+(1).pdf",
                      },
                      {
                        title: "Annual Report 2022-2023",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-2023.pdf",
                      },
                      {
                        title: "Annual Report 2021-2022",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report+2021-22.pdf",
                      },
                      {
                        title: "Annual Report 2020-2021",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-2020-21-Final.pdf",
                      },
                      {
                        title: "Annual Report 2019-2020",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report-2020.pdf",
                      },
                      {
                        title: "Annual Report 2018-2019",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual+Report+Final+2018-19.pdf",
                      },
                      {
                        title: "Annual Report 2017-2018",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Annual-Report-APIS-2017.pdf",
                      },
                      {
                        title: "Annual Report 2015-2016",
                        url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReport/Final-Annual-Report-2015-16-(1).pdf",
                      },
                    ].map(({ title, url }, index) => (
                      <tr
                        key={index}
                        className="border-b-2 border-[#003366]"
                      >
                        <td className="px-4 py-2">{title}</td>
                        <td className="px-4 py-2">
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            <Image src={pdficon1} alt="PDF" width="30" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div className="mt-2">
                <button
                  className="w-full text-left bg-gray-100 px-4 py-2 rounded-md font-medium shadow mb-2"
                  onClick={() => toggleCollapse("annualReturn")}
                >
                  ANNUAL RETURN
                  <span className="float-right">▼</span>
                </button>

                <div id="annualReturn" className="hidden mt-2 overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm text-left">
                    <tbody>
                      {[

                         {
                          title: "MGT-7 2024-2025",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/MGT-7-AR-2024-25.pdf",
                        },
                        {
                          title: "MGT-7 2023-2024",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReturn/MGT-7+(1).pdf",
                        },
                        {
                          title: "MGT-7 2022-2023",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReturn/MGT-7-23.pdf",
                        },
                        {
                          title: "MGT-7 2021-2022",
                          url: "https://apisindia.s3.ap-south-1.amazonaws.com/apisPdf/annualReturn/MGT-7.pdf",
                        },
                      ].map(({ title, url }, index) => (
                        <tr
                          key={index}
                          className="border-b-2 border-[#003366]"
                        >
                          <td className="px-4 py-2">{title}</td>
                          <td className="px-4 py-2">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                              <Image src={pdficon1} alt="PDF" width="30" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>


  );
}

// Toggle collapse logic
function toggleCollapse(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle("hidden");
  }
}

Investors.propTypes = {
  initialData: PropTypes.object,
};
