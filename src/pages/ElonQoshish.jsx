import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AddForm from "../companets/ElonQoshish/AddForm";

function ElonQoshish() {
  const navigate = useNavigate();

  const [authorized, setAuthorized] = useState(null);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("Toshkent");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAuthorized(false);
        return;
      }

      try {
        const res = await fetch(
          "https://reklama-backend-ax7j.onrender.com/api/auth/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.ok) {
          setAuthorized(true);
        } else {
          localStorage.removeItem("token");
          setAuthorized(false);
        }
      } catch (error) {
        console.error("Token tekshirishda xatolik:", error);
        setAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    try {
      if (!title || !category || !description) {
        alert("Iltimos, barcha majburiy maydonlarni to'ldiring!");
        return;
      }

      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("number", number);

      if (images && images.length > 0) {
        Array.from(images).forEach((file) => {
          formData.append("images", file);
        });
      }

      const res = await fetch(
        "https://reklama-backend-ax7j.onrender.com/api/announcements/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const result = await res.json();

      if (res.ok) {
        alert("E'lon muvaffaqiyatli joylandi!");
        navigate("/");
        window.location.reload();
      } else if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        setAuthorized(false);
        navigate("/login");
      } else {
        alert("Xatolik: " + (result.message || "E'lon saqlanmadi"));
      }
    } catch (error) {
      console.error("Xatolik tafsiloti:", error);
      alert("Serverga ulanishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  }

  if (authorized === null) {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>

        <h3 className="text-lg font-semibold text-gray-800">Kirilmoqda...</h3>

        <p className="text-sm text-gray-500">Iltimos, biroz kuting</p>
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AddForm
      navigate={navigate}
      loading={loading}
      title={title}
      setTitle={setTitle}
      category={category}
      setCategory={setCategory}
      location={location}
      setLocation={setLocation}
      description={description}
      setDescription={setDescription}
      images={images}
      setImages={setImages}
      handleSubmit={handleSubmit}
      number={number}
      setNumber={setNumber}
    />
  );
}

export default ElonQoshish;
