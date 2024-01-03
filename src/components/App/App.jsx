import { useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Container } from './App.styled';

import React from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackObject = { good, neutral, bad };

  const onFeedbackLeft = stateName => {
    if (stateName === 'good') return setGood(prevGood => prevGood + 1);
    if (stateName === 'neutral')
      return setNeutral(prevNeutral => prevNeutral + 1);
    if (stateName === 'bad') return setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    ((good / total) * 100).toFixed(0) || 0;

  const positivePercentage = countPositiveFeedbackPercentage();

  const feedbackNames = Object.keys(feedbackObject);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackNames}
          onLeaveFeedback={onFeedbackLeft}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
