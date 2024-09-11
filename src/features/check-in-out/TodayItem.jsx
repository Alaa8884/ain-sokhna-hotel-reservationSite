/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Flag } from "../../ui/Flag";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 6rem 2rem 1fr 7rem 8rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arrive</Tag>}
      {status === "checked-in" && <Tag type="brand">Depart</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryflag}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights}</div>

      {status === "unconfirmed" && (
        <Button
          sizes="small"
          variations="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}

      {status === "check-in" && (
        <CheckoutButton bookingId={id}/>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
