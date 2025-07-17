import React, { useState } from 'react';
import { 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Button,
  CircularProgress
} from '@mui/material';
import { 
  LocationOn, 
  CalendarToday, 
  People, 
  Search, 
  SwapHoriz,
  WbSunny,
  Today,
  DateRange
} from '@mui/icons-material';
import { useApp } from '../../contexts/AppContext';
import { getTodayDate, getTomorrowDate } from '../../utils/dateUtils';
import { cities, busOperators } from '../../data/busData';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const { searchData, setSearchData, setShowBusListings, setBuses } = useApp();
  const [selectedDateType, setSelectedDateType] = useState('tomorrow');
  const [isSearching, setIsSearching] = useState(false);

  const handleSwapCities = () => {
    setSearchData({
      ...searchData,
      from: searchData.to,
      to: searchData.from
    });
  };

  const handleDateSelect = (type) => {
    setSelectedDateType(type);
    let date = '';
    switch (type) {
      case 'today':
        date = getTodayDate();
        break;
      case 'tomorrow':
        date = getTomorrowDate();
        break;
      case 'calendar':
        date = 'Select Date';
        break;
      default:
        date = getTomorrowDate();
    }
    setSearchData({ ...searchData, date });
  };

  const handleSearch = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      setBuses(busOperators);
      setShowBusListings(true);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className={styles.searchContainer}>
      <h2 className={styles.formTitle}>Book Bus Tickets in Minutes</h2>

      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>
            <LocationOn />
            From
          </div>
          <FormControl fullWidth>
            <TextField
              value={searchData.from}
              onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
              placeholder="Departure City"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  backgroundColor: '#f9f9f9',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'white',
                  }
                }
              }}
            />
          </FormControl>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>
            <LocationOn />
            To
          </div>
          <div style={{ position: 'relative' }}>
            <FormControl fullWidth>
              <TextField
                value={searchData.to}
                onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                placeholder="Destination City"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '15px',
                    backgroundColor: '#f9f9f9',
                    paddingRight: '60px',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </FormControl>
            <button
              onClick={handleSwapCities}
              className={styles.swapButton}
              type="button"
              aria-label="Swap Cities"
            >
              <SwapHoriz />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>
            <CalendarToday />
            Date of Journey
          </div>
          <FormControl fullWidth>
            <TextField
              value={searchData.date}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  backgroundColor: '#f9f9f9',
                  cursor: 'default'
                }
              }}
            />
          </FormControl>
          <div className={styles.dateOptions}>
            {[
              { key: 'today', label: 'Today', icon: <WbSunny /> },
              { key: 'tomorrow', label: 'Tomorrow', icon: <Today /> },
              { key: 'calendar', label: 'Calendar', icon: <DateRange /> }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => handleDateSelect(option.key)}
                className={`${styles.dateButton} ${
                  selectedDateType === option.key ? styles.active : ''
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputLabel}>
            <People />
            Passengers
          </div>
          <FormControl fullWidth>
            <Select
              value={searchData.passengers}
              onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
              sx={{
                borderRadius: '15px',
                backgroundColor: '#f9f9f9',
                '&:hover': {
                  backgroundColor: 'white',
                },
                '&.Mui-focused': {
                  backgroundColor: 'white',
                }
              }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={`${num} Passenger${num > 1 ? 's' : ''}`}>
                  {num} Passenger{num > 1 ? 's' : ''}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <button
        onClick={handleSearch}
        disabled={isSearching}
        className={styles.searchButton}
      >
        {isSearching ? (
          <>
            <CircularProgress size={20} color="inherit" />
            Searching...
          </>
        ) : (
          <>
            <Search />
            Search Buses
          </>
        )}
      </button>
    </div>
  );
};

export default SearchForm;