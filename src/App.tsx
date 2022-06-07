import { useState, useEffect, useCallback } from 'react';
import { ContactData } from './common-types';
import './App.css';
import ContactCards from './components/ContactCards';
import { TableHeader } from './components/TableHeader';


function App() {
  const [contactData, setContactData] = useState<ContactData[]>([]);
  const [apiPageLimit, setApiPageLimit] = useState<number>(1);
  const [apiPageNumber, setApiPageNumber] = useState<number>(1)

  const scroller = () => {
    if (window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight) {
      setApiPageNumber(apiPageNumber => apiPageNumber + 1)
    }
  }


  const fetchData = useCallback(async () => {
    if (apiPageNumber <= apiPageLimit) {
      const response = await fetch(`https://reqres.in/api/users?page=${apiPageNumber}`);
      const data = await response.json();
      setContactData([...contactData, ...data.data]);
      setApiPageLimit(data.total_pages);
    }
  }, [apiPageNumber]);
  useEffect(() => {
    window.addEventListener('scroll', scroller);
    return () => {
      window.removeEventListener('scroll', scroller);
    }
  })
  useEffect(() => {
    fetchData();
  }, [apiPageNumber]);
  return (
    <>
      <TableHeader />
      <ContactCards contactData={contactData} />
    </>
  );
}

export default App;
