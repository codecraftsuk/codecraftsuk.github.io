// import { loadStripe } from '@stripe/stripe-js';
import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledFlexWrap } from '../../common/styles';
import Accordion from '../../components/Accordion';
import IconInfo from '../../components/IconInfo';
import IconText from '../../components/IconText';
import RoundedButton from '../../components/RoundedButton';
import { coursesData } from '../courses/messages';
import { StyledContentWrapper } from '../home/styled';
import { learningOnCodectaftsInfo } from './messages';
import { StyledBuyWrapper, StyledCourseDetails, StyledCourseDetailsWrapper, StyledLabel } from './styled';

const CourseDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = useMemo(() => coursesData.find((c) => c.id === +params.courseId), [params]);

  // let stripePromise;

  // const getStripe = async () => {
  //   if (!stripePromise) stripePromise = loadStripe(import.meta.env.VITE_PUB_KEY);
  //   return stripePromise;
  // };

  // const checkOutOptions = {
  //   lineItems: [
  //     {
  //       price: import.meta.env[course?.priceStr],
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   successUrl: `${window.location.origin}/#/payment/on/success`,
  //   cancelUrl: `${window.location.origin}/#/payment/on/cancel`,
  // };

  // const redirectToCheckout = async () => {
  //   const stripe = await getStripe();
  //   // const { error } = await stripe.redirectToCheckout(checkOutOptions);
  //   // console.log('stripe error', error);
  //   await stripe.redirectToCheckout(checkOutOptions);
  // };

  return (
    <>
      <StyledCourseDetailsWrapper>
        <StyledCourseDetails>
          {/* <ion-icon className="back" name="chevron-back-outline" onClick={() => navigate(-1)} /> */}
          <div className="back">
            <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
            <h2>{course.name}</h2>
          </div>
          <div className="course-section-2">
            <StyledLabel>Description</StyledLabel>
            {course.longDescription.map((desc) => (
              <p className="long-description">{desc}</p>
            ))}

            <div className="weeks">
              <StyledLabel>Course Context</StyledLabel>
              {course?.weeks?.map((week) => (
                <Accordion title={week.title} text={week.description} bullets={week?.bullets} />
              ))}
            </div>
          </div>
        </StyledCourseDetails>

        <StyledBuyWrapper>
          <img src={course?.image} alt="" />
          <h2>{course?.name}</h2>
          <span>
            <h2>£{course?.price}</h2>
            {course?.monthlyPrice && <h3>or £{course?.monthlyPrice}/m for 3 months</h3>}
          </span>
          <RoundedButton
            onClick={() => (window.location.href = course.checkoutUrl)}
            disabled={course?.isComingSoon}
            bgColor="#5851D0"
          >
            {course?.isComingSoon ? 'Coming Soon' : 'Buy Now'}
          </RoundedButton>
          <div className="course-info">
            <IconText name="save-outline">Last Updated 09/01/2022</IconText>
            <IconText name="language-outline">English</IconText>
            <IconText name="code-slash-outline">Coding Exercises</IconText>
            <IconText name="laptop-outline">Access on Mobile, TV, PC</IconText>
            <IconText name="git-pull-request-outline">MAC/Windows Machine & IDE</IconText>
          </div>
        </StyledBuyWrapper>
      </StyledCourseDetailsWrapper>
      <StyledContentWrapper>
        <h2 style={{ marginBottom: '40px' }}>Learning on CodeCrafts</h2>
        <StyledFlexWrap px="10" py="0">
          {learningOnCodectaftsInfo.map((iconData) => (
            <IconInfo alignLeft {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledContentWrapper>
    </>
  );
};

export default CourseDetails;
