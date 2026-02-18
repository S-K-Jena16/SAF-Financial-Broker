export const services = [
  {
    id: "1",
    title: "Financial Consultancy",
    shortDescription:
      "Our financial consultancy holds expertise in customization of solutions to help businesses optimize profitability, growth, and compliance. We empower data-driven decisions to ensure long-term success.",
    description:
      "In today's complex business landscape, financial excellence is much more beyond number-crunching. It's about translating the data in your strategic advantage.Our expert financial consulting team specializes in unlocking your company's full financial potential, delivering comprehensive solutions that drive sustainable growth and operational efficiency.We don't just analyse numbers; we craft holistic financial strategies that align with your unique business objectives.",
    icon: "chart",
    image: "/images/FinancialConsultancy.jpg",
    features: [
      "Strategic financial planning",
      "Capital structure optimization",
      "M&A advisory and due diligence",
      "Valuation and fairness opinions",
      "Restructuring and turnaround",
    ],
  },
  {
    id: "2",
    title: "Mortgage",
    shortDescription:
      "Tailored mortgage services form one of our offerings in the mortgage section. Besides, we offer everything that our clients need for confidently navigating purchase, refinance, or investments - at competitive rates.",
    description:
      "The mortgage process often feels like an overwhelming, complex maze. However, it doesn't have to be. Our personalized mortgage consulting services are designed to transform a potentially stressful experience into a clear, confident path to homeownership.We don't just process mortgages. We take the burden off your shoulders, and guide you through every critical stage of your home financing journey.",
    icon: "briefcase",
    image: "/images/Mortgage.jpg",
    features: [
      "Equity and debt fundraising",
      "Mergers and acquisitions",
      "IPO and listing advisory",
      "Private placement and syndication",
      "Transaction structuring",
    ],
  },
  {
    id: "3",
    title: "Credit Card",
    shortDescription:
      "Our credit card solutions help clients achieve effective credit management by selecting the right card at low rates that offers rewards - all to enhance financial flexibility.",
    description:
      "In today's complex financial landscape, finding the right credit card is more than just a transaction—it's a strategic decision that can significantly impact your financial health and lifestyle.Our expert credit card solutions are designed to transform how you approach credit, empowering you to make informed choices that align perfectly with your personal and financial goals.Credit is a powerful tool but only when is used wisely. Let us help you leverage credit cards as a strategic tool and turn everyday expenditure into opportunities. Our goal is mutual - your growth, rewards, and financial stability.",
    icon: "shield",
    image: "/images/CreditCard.jpg",
    features: [
      "Risk assessment and modeling",
      "Compliance and regulatory advisory",
      "Enterprise risk frameworks",
      "Crisis management planning",
      "Insurance and hedging strategies",
    ],
  },
  {
    id: "4",
    title: "Personal Loan",
    shortDescription:
      "Our personal loan services provide tailored solutions with competitive rates and flexible terms to help clients meet their financial goals.",
    description:
      "Navigating personal loans has never been easy. Personal loans can be a powerful financial tool, but the application process often feels overwhelming. Our personalized loan services are designed to transform this complex journey into a clear, straightforward path toward achieving your financial goals.Our expertise aligns with your financial goals. Our personal loan services are especially designed to provide the flexibility, support, and expertise that you need to achieve your financial objectives.",
    icon: "calculator",
    image: "/images/PersonalLoan.jpg",
    features: [
      "Tax planning and optimization",
      "Cross-border structuring",
      "Transfer pricing",
      "Tax compliance and reporting",
      "Incentive and grant advisory",
    ],
  },
  {
    id: "5",
    title: "Payment Solutions",
    shortDescription:
      "Our payment solutions provide secure, efficient systems to optimize transactions, reduce costs, and improve customer satisfaction across multiple platforms.",
    description:
      "In an era of rapid digital transformation, payment solutions are the backbone of financial success for businesses and individuals alike. Our expert payment technology services bridge the gap between cutting-edge innovation and practical financial management.To revolutionize your payments seamlessly, security, and strategically, we deliver end-to-end payment solutions that transform how businesses and individuals manage financial transactions.",
    icon: "scale",
    image: "/images/PaymentSolutions.jpg",
    features: [
      "Business and equity valuation",
      "Fairness opinions",
      "Impairment testing",
      "ESOP and incentive valuation",
      "Litigation support",
    ],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
