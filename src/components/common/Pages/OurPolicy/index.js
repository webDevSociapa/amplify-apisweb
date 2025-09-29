"use client";

import { Terms_Conditions } from "@/lib/constants";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const policies = [
    {
        title: "Performance Evaluation Policy",
        path: "https://apisindia.com/pdf/PERFORMANCE-EVALUATION-POLICY.pdf",
    },
    {
        title: "Policy on Preservation of Documents",
        path: "https://apisindia.com/pdf/Policy-on-Preservation-of-Documents.pdf",
    },
    {
        title: "Policy for Determining Material Subsidiary",
        path: "https://apisindia.com/pdf/POLICY-FOR-DETERMINING-MATERIAL-SUBSIDIARY.pdf",
    },
    {
        title: "Familiarisation Programme for Independent Directors",
        path: "https://apisindia.com/pdf/Familiarisation-Programme-for-Independent-Directors.pdf",
    },
    {
        title: "Policy for Determination of Materiality",
        path: "https://apisindia.com/pdf/Policy-for-Determination-of-Materiality.pdf",
    },
    {
        title: "Risk Management Policy",
        path: "https://apisindia.com/pdf/Risk-Management-Policy-.pdf",
    },
];

export default function OurPolicy() {
    const searchParams = useSearchParams();
    const [currentPolicy, setCurrentPolicy] = useState(0); // Default to Terms & Conditions

    useEffect(() => {
        const policy = searchParams.get("policy");
        if (policy === "privacy") {
            setCurrentPolicy(1); // Set to Privacy Policy
        } else {
            setCurrentPolicy(0); // Default to Terms & Conditions
        }
    }, [searchParams]);

    const renderPolicyContent = () => {
        if (currentPolicy === 1) {
            // Render privacy-related policy cards if "privacy" is selected
            return (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {policies.map((policy, index) => (
                        <div key={index} className="p-4 border rounded shadow-lg">
                            <h2 className="text-lg font-semibold">{policy.title}</h2>
                            <div className="mt-4">
                                <a
                                    href={policy.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#9F7B49] hover:underline"
                                >
                                    View & Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        // Default to Terms & Conditions content
        return (
            <div dangerouslySetInnerHTML={{ __html: Terms_Conditions[currentPolicy].content }}></div>
        );
    };

    return (
        <div className="p-6">
            <h1 className="text-lg font-bold">Our Policies</h1>
            {renderPolicyContent()}
        </div>
    );
}
