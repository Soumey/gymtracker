
import './App.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import musclesF from './assets/Muscles.png'
import musclesB from './assets/MusclesBack.png'
import { Button, Card, CardBody } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { TCategory, getCategories } from './api/getCategories';
function App() {
  // 16 przyciskow
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [categoriesArray, setCategoriesArray] = useState<string[]>([])
  useEffect(() => {
    async function fetchCategories() {
      const newCategories = await getCategories();
      setCategories(newCategories);

      const title = newCategories.map(category => category._id);
      setCategoriesArray(title);
    }
    fetchCategories();
  }, []);


  return (
    <div className="app">
      <div className="image-container">
        <div className="front">
          <Image fluid src={musclesF} style={{ minHeight: '500px', minWidth: '300px' }} />
          <Button variant="success" size="sm" className="btnTraps rounded-circle" title='Traps' as={Link} to={`/categories/${categoriesArray[0]}/exercises`} style={{ textDecoration: 'none', color: 'inherit' }} ></Button>
          <Button variant="success" size="sm" className="btnChest rounded-circle" title='Chest'></Button>
          <Button variant="success" size="sm" className="btnAbs rounded-circle" title='ABS'></Button>
          <Button variant="success" size="sm" className="btnQuads rounded-circle" title='Quads'></Button>
          <Button variant="success" size="sm" className="btnBiceps rounded-circle" title='Biceps'></Button>
          <Button variant="success" size="sm" className="btnObliques rounded-circle" title='Obliques'></Button>
          <Button variant="success" size="sm" className="btnFrontShoulders rounded-circle" title='Front of shoulders'></Button>
          <Button variant="success" size="sm" className="btnForearms rounded-circle" title='Forearms'></Button>
          <Button variant="success" size="sm" className="btnHands rounded-circle" title='Hands'></Button>
        </div>
        <div className="back">
          <Image fluid src={musclesB} style={{ minHeight: '500px', minWidth: '300px' }} />
          <Button variant="success" size="sm" className="btnTrapsBack rounded-circle" title='Back of traps'></Button>
          <Button variant="success" size="sm" className="btnLats rounded-circle" title='Lats'></Button>
          <Button variant="success" size="sm" className="btnGlutes rounded-circle" title='Glutes'></Button>
          <Button variant="success" size="sm" className="btnHamstrings rounded-circle" title='Hamstrings'></Button>
          <Button variant="success" size="sm" className="btnTriceps rounded-circle" title='Triceps'></Button>
          <Button variant="success" size="sm" className="btnBackShoulders rounded-circle" title='Back of shoulders'></Button>
          <Button variant="success" size="sm" className="btnCalves rounded-circle" title='Calves'></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
