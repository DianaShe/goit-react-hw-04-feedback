import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const options = {good, neutral, bad}

  const handleClick = label => {
    switch (label) {
      case 'good':
        setGood (prev => prev +1)
        break;
      case 'neutral':
        setNeutral ((prev => prev +1))
        break;
      case 'bad':
        setBad ((prev => prev +1))
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackCount =
      (good / countTotalFeedback()) * 100;
    return Math.round(positiveFeedbackCount);
  };

  
    // const options = Object.keys(this.state);
    

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  
}
