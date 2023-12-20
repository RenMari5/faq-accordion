import questions from "./questions";

import { Accordion } from '@mantine/core';

function FAQs() {
  // See groceries data above
  const faq = questions.map((question) => (
    <Accordion.Item key={question.question} value={question.question}>
      <Accordion.Control >{question.answer}</Accordion.Control>
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="What is Frontend Mentor, and how will it help me?">
      {faq}
    </Accordion>
  );
}

export default FAQs;