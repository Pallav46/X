import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth} from "../../context/ProviderAuthContext";


const useProviderSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  const signup = async ({
    name,
    email,
    password,
    phoneNumber,
    altPhoneNumber,
    rating,
    reviews,
    location,
    services,
  }) => {
    const success = handleInputErrors({
      name,
      email,
      password,
      phoneNumber,
      altPhoneNumber,
      location,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/v1/providers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phoneNumber,
          altPhoneNumber,
          rating,
          reviews,
          location,
          services,
        }),
      });
      const data = await response.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("x-provider", JSON.stringify(data));
			setAuthToken(data);
      toast.success("Signup Successful");
      navigate("/providers/dashboard")
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useProviderSignup;

function handleInputErrors({ name, email, password, phoneNumber, location }) {
  if (
    !name ||
    !email ||
    !password ||
    !phoneNumber ||
    !location.address ||
    !location.city ||
    !location.state ||
    !location.coordinates.coordinates.length
  ) {
    toast.error("Please fill in all required fields");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return false;
  }

  return true;
}
