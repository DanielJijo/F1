import DriversGrid from "@/components/drivers-grid";
import drivers from "@/data/drivers"; // Make sure you have a drivers data file

export default function SomePage() {
  return <DriversGrid drivers={drivers} />;
}