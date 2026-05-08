import { useNavigation } from "react-router-dom";

export default function SubmitBtn({ text }) {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "isSubmitting";
  console.log(navigate);
  
  return (
    <button className="btn btn-primary uppercase btn-block" type="submit">
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner">senfing... </span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}
