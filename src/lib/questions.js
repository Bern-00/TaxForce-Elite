export const questions = [
  // --- PARTIE 1 : ADVANCED ENGLISH COMPREHENSION & NUANCE (5 Questions) ---
  // Objectif : Tester la capacité à comprendre l'implicite et le ton professionnel.
  {
    id: 1,
    category: "Advanced English",
    question: "A customer emails: 'I’m extremely disappointed that my refund is smaller than last year. Your software must be broken.' Choose the most professional and de-escalating response:",
    options: [
      "The software is not broken, calculations are based on the data you entered.",
      "I understand your concern regarding the refund amount. Let's review your entries together to ensure everything is accurate compared to last year.",
      "Refunds vary every year, you shouldn't compare them.",
      "I am sorry you feel that way, but there is nothing I can do."
    ],
    correctAnswer: "I understand your concern regarding the refund amount. Let's review your entries together to ensure everything is accurate compared to last year."
  },
  {
    id: 2,
    category: "Advanced English",
    question: "Select the sentence that uses the 'Active Voice' (preferred for clear instructions):",
    options: [
      "The form should be signed by you at the bottom.",
      "Signing the form at the bottom is required.",
      "You must sign the form at the bottom.",
      "The bottom of the form is where the signature goes."
    ],
    correctAnswer: "You must sign the form at the bottom."
  },
  {
    id: 3,
    category: "Advanced English",
    question: "A client is vague: 'I got some money from selling old clothes online.' You need to clarify if this is taxable income. How do you ask?",
    options: [
      "Was it a lot of money?",
      "Did you receive a Form 1099-K, and were these items sold for a profit or at a loss compared to the original purchase price?",
      "You have to pay taxes on that.",
      "Is this your job?"
    ],
    correctAnswer: "Did you receive a Form 1099-K, and were these items sold for a profit or at a loss compared to the original purchase price?"
  },
  {
    id: 4,
    category: "Advanced English",
    question: "Choose the correct preposition for this specific tax context: 'You can claim this deduction _____ your Adjusted Gross Income.'",
    options: ["against", "on", "with", "regarding"],
    correctAnswer: "against"
  },
  {
    id: 5,
    category: "Advanced English",
    question: "Which phrase best replaces 'You made a mistake' to sound less accusatory?",
    options: [
      "You are wrong.",
      "The error is yours.",
      "It appears there is a discrepancy in the data entered.",
      "You failed to enter the data correctly."
    ],
    correctAnswer: "It appears there is a discrepancy in the data entered."
  },

  // --- PARTIE 2 : CUSTOMER SERVICE & EMOTIONAL INTELLIGENCE (5 Questions) ---
  // Objectif : Tester l'empathie et la gestion de crise (soft skills).
  {
    id: 6,
    category: "Customer Obsession",
    question: "A customer is crying on the phone because they owe the IRS $2,000 and cannot pay. What is your immediate reaction?",
    options: [
      "Explain the payment plan options immediately.",
      "Tell them it happens to everyone.",
      "Pause, acknowledge their distress with empathy ('I hear how stressful this is for you'), and then gently transition to explaining IRS installment agreements.",
      "Transfer them to the IRS."
    ],
    correctAnswer: "Pause, acknowledge their distress with empathy ('I hear how stressful this is for you'), and then gently transition to explaining IRS installment agreements."
  },
  {
    id: 7,
    category: "Conflict Resolution",
    question: "A customer insists on claiming a pet dog as a 'Dependent' because 'he is like a son'. How do you handle this?",
    options: [
      "Laugh and say no.",
      "Respectfully explain that under IRS tax law, dependents must be humans, but check if the pet qualifies as a Service Animal for medical deductions.",
      "Do it if the customer insists (Customer is King).",
      "Tell them they will go to jail."
    ],
    correctAnswer: "Respectfully explain that under IRS tax law, dependents must be humans, but check if the pet qualifies as a Service Animal for medical deductions."
  },
  {
    id: 8,
    category: "Professional Boundaries",
    question: "A customer asks you to share your screen so THEY can see YOUR computer. What is the policy?",
    options: [
      "Do it to build trust.",
      "Refuse. For security reasons, agents can view the customer's screen (SmartLook), but customers cannot view the agent's screen.",
      "Only if my manager approves.",
      "Yes, but only for 5 minutes."
    ],
    correctAnswer: "Refuse. For security reasons, agents can view the customer's screen (SmartLook), but customers cannot view the agent's screen."
  },
  {
    id: 9,
    category: "Soft Skills",
    question: "You have been troubleshooting a technical issue for 15 minutes with no success. The customer is getting impatient. What do you do?",
    options: [
      "Keep trying silently.",
      "Hang up and hope they call someone else.",
      "Recap what you have tried, apologize for the delay, and ask for permission to consult a Tier 2 Technical Expert while placing them on a brief hold.",
      "Tell them their computer is broken."
    ],
    correctAnswer: "Recap what you have tried, apologize for the delay, and ask for permission to consult a Tier 2 Technical Expert while placing them on a brief hold."
  },
  {
    id: 10,
    category: "Closing",
    question: "The problem is solved. What is the Intuit standard for closing a call?",
    options: [
      "Bye.",
      "Good luck.",
      "Summarize what was accomplished, ask if there are any other questions, and thank them for choosing TurboTax.",
      "Ask them to hurry up."
    ],
    correctAnswer: "Summarize what was accomplished, ask if there are any other questions, and thank them for choosing TurboTax."
  },

  // --- PARTIE 3 : TURBOTAX LIVE AGENT SPECIFICS & US TAX (10 Questions) ---
  // Objectif : Connaissances techniques et fiscales US (Hard skills).
  {
    id: 11,
    category: "US Tax Knowledge",
    question: "A single mother lives with her 2 children. She pays more than 50% of the household costs. Which Filing Status likely gives her the best tax benefit?",
    options: ["Single", "Married Filing Separately", "Head of Household", "Qualifying Widow(er)"],
    correctAnswer: "Head of Household"
  },
  {
    id: 12,
    category: "US Tax Knowledge",
    question: "What is the primary difference between a W-2 and a 1099-NEC?",
    options: [
      "W-2 is for employees (taxes withheld); 1099-NEC is for independent contractors (no taxes withheld).",
      "W-2 is for rich people; 1099 is for poor people.",
      "1099-NEC is for government workers.",
      "There is no difference."
    ],
    correctAnswer: "W-2 is for employees (taxes withheld); 1099-NEC is for independent contractors (no taxes withheld)."
  },
  {
    id: 13,
    category: "TurboTax Process",
    question: "In TurboTax Live, what is the 'Accuracy Guarantee'?",
    options: [
      "We promise you will get a refund.",
      "If the software makes a calculation error that results in a penalty, Intuit pays the penalty and interest.",
      "We guarantee nobody will ever audit you.",
      "We promise to finish your return in 10 minutes."
    ],
    correctAnswer: "If the software makes a calculation error that results in a penalty, Intuit pays the penalty and interest."
  },
  {
    id: 14,
    category: "US Tax Knowledge",
    question: "A client asks about the 'Standard Deduction' for 2024. What does this mean?",
    options: [
      "It's a tax penalty.",
      "It's the flat amount that reduces taxable income, available to most taxpayers who do not itemize expenses.",
      "It's money the government gives you for free.",
      "It's a deduction for business owners only."
    ],
    correctAnswer: "It's the flat amount that reduces taxable income, available to most taxpayers who do not itemize expenses."
  },
  {
    id: 15,
    category: "US Tax Knowledge",
    question: "Regarding the Child Tax Credit (CTC): Does a child who turned 18 during the tax year qualify for the full credit?",
    options: [
      "Yes, always.",
      "No, the child must be under age 17 at the end of the tax year.",
      "Yes, if they are in college.",
      "Only if they work."
    ],
    correctAnswer: "No, the child must be under age 17 at the end of the tax year."
  },
  {
    id: 16,
    category: "Technical Tooling",
    question: "What is 'SmartLook' in the context of TurboTax Live?",
    options: [
      "A fashion app.",
      "A one-way video technology allowing the agent to see the customer's screen and draw on it to guide them, while the customer sees the agent via video.",
      "A tool to hack the customer's bank account.",
      "A video game."
    ],
    correctAnswer: "A one-way video technology allowing the agent to see the customer's screen and draw on it to guide them, while the customer sees the agent via video."
  },
  {
    id: 17,
    category: "Security & Compliance",
    question: "A customer wants to verify their identity but lost their driver's license. Can you accept a library card as primary ID?",
    options: [
      "Yes.",
      "No, only government-issued photo ID (Passport, State ID, Military ID) is acceptable for verification standards.",
      "Yes, if they promise it's them.",
      "Ask your manager."
    ],
    correctAnswer: "No, only government-issued photo ID (Passport, State ID, Military ID) is acceptable for verification standards."
  },
  {
    id: 18,
    category: "US Tax Knowledge",
    question: "What happens if a customer withdraws money from their 401(k) retirement account before age 59½?",
    options: [
      "Nothing.",
      "It is generally subject to income tax plus a 10% early withdrawal penalty (unless an exception applies).",
      "They get a bonus.",
      "The account is closed forever."
    ],
    correctAnswer: "It is generally subject to income tax plus a 10% early withdrawal penalty (unless an exception applies)."
  },
  {
    id: 19,
    category: "Data Entry",
    question: "A customer brings a handwritten list of charity donations. Can you enter them?",
    options: [
      "No, they need official receipts if they want to survive an audit, but you can enter them if they insist (warning them about documentation).",
      "Yes, enter whatever numbers they say without question.",
      "Call the charities to verify.",
      "Refuse to help."
    ],
    correctAnswer: "No, they need official receipts if they want to survive an audit, but you can enter them if they insist (warning them about documentation)."
  },
  {
    id: 20,
    category: "Scenario Analysis",
    question: "The customer is self-employed (Uber Driver). They want to deduct their daily lunch and regular clothes as 'Business Expenses'. Can they?",
    options: [
      "Yes, everything is deductible.",
      "No. Regular meals and everyday clothing are personal expenses and not deductible. Only business meals (50%) and uniforms/safety gear are deductible.",
      "Yes, if they eat in the car.",
      "Only the clothes."
    ],
    correctAnswer: "No. Regular meals and everyday clothing are personal expenses and not deductible. Only business meals (50%) and uniforms/safety gear are deductible."
  }
];