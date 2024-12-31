import { FaUsers, FaChartLine, FaShoppingCart } from "react-icons/fa";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Users",
      value: "1,234",
      icon: FaUsers,
      color: "#3498db",
    },
    {
      title: "Revenue",
      value: "$45,678",
      icon: FaChartLine,
      color: "#2ecc71",
    },
    {
      title: "Orders",
      value: "892",
      icon: FaShoppingCart,
      color: "#e74c3c",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div key={index} className="col-md-4">
          <div className="card h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h6 className="card-subtitle mb-2 text-muted">{card.title}</h6>
                <h3 className="card-title mb-0">{card.value}</h3>
              </div>
              <card.icon size={40} style={{ color: card.color }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
