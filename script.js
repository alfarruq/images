// Destructuring Props:
// Kod yozishni osonlashtirish uchun props’larni destructure qilib olish mumkin.

function Salom({ name, age }) {
  return (
    <div>
      <h2>Ism: {name}</h2>
      <p>Yosh: {age}</p>
    </div>
  );
}
