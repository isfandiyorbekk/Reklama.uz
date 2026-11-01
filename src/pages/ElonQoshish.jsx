import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddForm from "../companets/ElonQoshish/AddForm";

function ElonQoshish() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("Toshkent");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    try {
      if (!title || !category || !description) {
        alert("Iltimos, barcha majburiy maydonlarni to'ldiring!");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("location", location);
      formData.append("description", description);

      // FileList ni to'g'ri massivga o'tkazib FormData'ga qo'shamiz
      if (images && images.length > 0) {
        Array.from(images).forEach((file) => {
          formData.append("images", file);
          console.log("FormData'ga qo'shildi:", file.name);
        });
      }

      const res = await fetch(
        "https://reklama-backend-7.onrender.com/api/announcements/create",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await res.json();
      console.log("Serverdan kelgan javob:", result);

      if (res.ok) {
        alert("E'lon muvaffaqiyatli joylandi!");
        navigate("/");
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
      setImages={setImages}
      handleSubmit={handleSubmit}
    />
  );
}

export default ElonQoshish;
