export interface IndianCity {
  city: string;
  state: string;
  displayName: string;
}

export const indianCities: IndianCity[] = [
  // Major Metropolitan Cities
  { city: 'Mumbai', state: 'Maharashtra', displayName: 'Mumbai, Maharashtra' },
  { city: 'Delhi', state: 'Delhi', displayName: 'Delhi, Delhi' },
  { city: 'Bangalore', state: 'Karnataka', displayName: 'Bangalore, Karnataka' },
  { city: 'Hyderabad', state: 'Telangana', displayName: 'Hyderabad, Telangana' },
  { city: 'Chennai', state: 'Tamil Nadu', displayName: 'Chennai, Tamil Nadu' },
  { city: 'Kolkata', state: 'West Bengal', displayName: 'Kolkata, West Bengal' },
  { city: 'Pune', state: 'Maharashtra', displayName: 'Pune, Maharashtra' },
  { city: 'Ahmedabad', state: 'Gujarat', displayName: 'Ahmedabad, Gujarat' },
  { city: 'Jaipur', state: 'Rajasthan', displayName: 'Jaipur, Rajasthan' },
  { city: 'Surat', state: 'Gujarat', displayName: 'Surat, Gujarat' },
  
  // Tier 2 Cities
  { city: 'Lucknow', state: 'Uttar Pradesh', displayName: 'Lucknow, Uttar Pradesh' },
  { city: 'Kanpur', state: 'Uttar Pradesh', displayName: 'Kanpur, Uttar Pradesh' },
  { city: 'Nagpur', state: 'Maharashtra', displayName: 'Nagpur, Maharashtra' },
  { city: 'Indore', state: 'Madhya Pradesh', displayName: 'Indore, Madhya Pradesh' },
  { city: 'Thane', state: 'Maharashtra', displayName: 'Thane, Maharashtra' },
  { city: 'Bhopal', state: 'Madhya Pradesh', displayName: 'Bhopal, Madhya Pradesh' },
  { city: 'Visakhapatnam', state: 'Andhra Pradesh', displayName: 'Visakhapatnam, Andhra Pradesh' },
  { city: 'Pimpri-Chinchwad', state: 'Maharashtra', displayName: 'Pimpri-Chinchwad, Maharashtra' },
  { city: 'Patna', state: 'Bihar', displayName: 'Patna, Bihar' },
  { city: 'Vadodara', state: 'Gujarat', displayName: 'Vadodara, Gujarat' },
  { city: 'Ghaziabad', state: 'Uttar Pradesh', displayName: 'Ghaziabad, Uttar Pradesh' },
  { city: 'Ludhiana', state: 'Punjab', displayName: 'Ludhiana, Punjab' },
  { city: 'Agra', state: 'Uttar Pradesh', displayName: 'Agra, Uttar Pradesh' },
  { city: 'Nashik', state: 'Maharashtra', displayName: 'Nashik, Maharashtra' },
  { city: 'Faridabad', state: 'Haryana', displayName: 'Faridabad, Haryana' },
  { city: 'Meerut', state: 'Uttar Pradesh', displayName: 'Meerut, Uttar Pradesh' },
  { city: 'Rajkot', state: 'Gujarat', displayName: 'Rajkot, Gujarat' },
  { city: 'Kalyan-Dombivali', state: 'Maharashtra', displayName: 'Kalyan-Dombivali, Maharashtra' },
  { city: 'Vasai-Virar', state: 'Maharashtra', displayName: 'Vasai-Virar, Maharashtra' },
  { city: 'Varanasi', state: 'Uttar Pradesh', displayName: 'Varanasi, Uttar Pradesh' },
  { city: 'Srinagar', state: 'Jammu and Kashmir', displayName: 'Srinagar, Jammu and Kashmir' },
  { city: 'Aurangabad', state: 'Maharashtra', displayName: 'Aurangabad, Maharashtra' },
  { city: 'Dhanbad', state: 'Jharkhand', displayName: 'Dhanbad, Jharkhand' },
  { city: 'Amritsar', state: 'Punjab', displayName: 'Amritsar, Punjab' },
  { city: 'Allahabad', state: 'Uttar Pradesh', displayName: 'Allahabad, Uttar Pradesh' },
  { city: 'Ranchi', state: 'Jharkhand', displayName: 'Ranchi, Jharkhand' },
  { city: 'Howrah', state: 'West Bengal', displayName: 'Howrah, West Bengal' },
  { city: 'Coimbatore', state: 'Tamil Nadu', displayName: 'Coimbatore, Tamil Nadu' },
  { city: 'Jabalpur', state: 'Madhya Pradesh', displayName: 'Jabalpur, Madhya Pradesh' },
  { city: 'Gwalior', state: 'Madhya Pradesh', displayName: 'Gwalior, Madhya Pradesh' },
  { city: 'Vijayawada', state: 'Andhra Pradesh', displayName: 'Vijayawada, Andhra Pradesh' },
  { city: 'Jodhpur', state: 'Rajasthan', displayName: 'Jodhpur, Rajasthan' },
  { city: 'Madurai', state: 'Tamil Nadu', displayName: 'Madurai, Tamil Nadu' },
  { city: 'Raipur', state: 'Chhattisgarh', displayName: 'Raipur, Chhattisgarh' },
  { city: 'Kota', state: 'Rajasthan', displayName: 'Kota, Rajasthan' },
  { city: 'Guwahati', state: 'Assam', displayName: 'Guwahati, Assam' },
  { city: 'Chandigarh', state: 'Chandigarh', displayName: 'Chandigarh, Chandigarh' },
  { city: 'Solapur', state: 'Maharashtra', displayName: 'Solapur, Maharashtra' },
  { city: 'Hubballi-Dharwad', state: 'Karnataka', displayName: 'Hubballi-Dharwad, Karnataka' },
  { city: 'Bareilly', state: 'Uttar Pradesh', displayName: 'Bareilly, Uttar Pradesh' },
  { city: 'Moradabad', state: 'Uttar Pradesh', displayName: 'Moradabad, Uttar Pradesh' },
  { city: 'Mysore', state: 'Karnataka', displayName: 'Mysore, Karnataka' },
  { city: 'Gurgaon', state: 'Haryana', displayName: 'Gurgaon, Haryana' },
  { city: 'Aligarh', state: 'Uttar Pradesh', displayName: 'Aligarh, Uttar Pradesh' },
  { city: 'Jalandhar', state: 'Punjab', displayName: 'Jalandhar, Punjab' },
  { city: 'Tiruchirappalli', state: 'Tamil Nadu', displayName: 'Tiruchirappalli, Tamil Nadu' },
  { city: 'Bhubaneswar', state: 'Odisha', displayName: 'Bhubaneswar, Odisha' },
  { city: 'Salem', state: 'Tamil Nadu', displayName: 'Salem, Tamil Nadu' },
  { city: 'Warangal', state: 'Telangana', displayName: 'Warangal, Telangana' },
  { city: 'Mira-Bhayandar', state: 'Maharashtra', displayName: 'Mira-Bhayandar, Maharashtra' },
  { city: 'Thiruvananthapuram', state: 'Kerala', displayName: 'Thiruvananthapuram, Kerala' },
  { city: 'Bhiwandi', state: 'Maharashtra', displayName: 'Bhiwandi, Maharashtra' },
  { city: 'Saharanpur', state: 'Uttar Pradesh', displayName: 'Saharanpur, Uttar Pradesh' },
  { city: 'Gorakhpur', state: 'Uttar Pradesh', displayName: 'Gorakhpur, Uttar Pradesh' },
  { city: 'Guntur', state: 'Andhra Pradesh', displayName: 'Guntur, Andhra Pradesh' },
  { city: 'Bikaner', state: 'Rajasthan', displayName: 'Bikaner, Rajasthan' },
  { city: 'Amravati', state: 'Maharashtra', displayName: 'Amravati, Maharashtra' },
  { city: 'Noida', state: 'Uttar Pradesh', displayName: 'Noida, Uttar Pradesh' },
  { city: 'Jamshedpur', state: 'Jharkhand', displayName: 'Jamshedpur, Jharkhand' },
  { city: 'Bhilai', state: 'Chhattisgarh', displayName: 'Bhilai, Chhattisgarh' },
  { city: 'Cuttack', state: 'Odisha', displayName: 'Cuttack, Odisha' },
  { city: 'Firozabad', state: 'Uttar Pradesh', displayName: 'Firozabad, Uttar Pradesh' },
  { city: 'Kochi', state: 'Kerala', displayName: 'Kochi, Kerala' },
  { city: 'Nellore', state: 'Andhra Pradesh', displayName: 'Nellore, Andhra Pradesh' },
  { city: 'Bhavnagar', state: 'Gujarat', displayName: 'Bhavnagar, Gujarat' },
  { city: 'Dehradun', state: 'Uttarakhand', displayName: 'Dehradun, Uttarakhand' },
  { city: 'Durgapur', state: 'West Bengal', displayName: 'Durgapur, West Bengal' },
  { city: 'Asansol', state: 'West Bengal', displayName: 'Asansol, West Bengal' },
  { city: 'Rourkela', state: 'Odisha', displayName: 'Rourkela, Odisha' },
  { city: 'Nanded', state: 'Maharashtra', displayName: 'Nanded, Maharashtra' },
  { city: 'Kolhapur', state: 'Maharashtra', displayName: 'Kolhapur, Maharashtra' },
  { city: 'Ajmer', state: 'Rajasthan', displayName: 'Ajmer, Rajasthan' },
  { city: 'Akola', state: 'Maharashtra', displayName: 'Akola, Maharashtra' },
  { city: 'Gulbarga', state: 'Karnataka', displayName: 'Gulbarga, Karnataka' },
  { city: 'Loni', state: 'Uttar Pradesh', displayName: 'Loni, Uttar Pradesh' },
  { city: 'Ujjain', state: 'Madhya Pradesh', displayName: 'Ujjain, Madhya Pradesh' },
  { city: 'Siliguri', state: 'West Bengal', displayName: 'Siliguri, West Bengal' },
  { city: 'Jhansi', state: 'Uttar Pradesh', displayName: 'Jhansi, Uttar Pradesh' },
  { city: 'Ulhasnagar', state: 'Maharashtra', displayName: 'Ulhasnagar, Maharashtra' },
  { city: 'Jammu', state: 'Jammu and Kashmir', displayName: 'Jammu, Jammu and Kashmir' },
  { city: 'Sangli-Miraj', state: 'Maharashtra', displayName: 'Sangli-Miraj, Maharashtra' },
  { city: 'Mangalore', state: 'Karnataka', displayName: 'Mangalore, Karnataka' },
  { city: 'Erode', state: 'Tamil Nadu', displayName: 'Erode, Tamil Nadu' },
  { city: 'Belgaum', state: 'Karnataka', displayName: 'Belgaum, Karnataka' },
  { city: 'Ambattur', state: 'Tamil Nadu', displayName: 'Ambattur, Tamil Nadu' },
  { city: 'Tirunelveli', state: 'Tamil Nadu', displayName: 'Tirunelveli, Tamil Nadu' },
  { city: 'Malegaon', state: 'Maharashtra', displayName: 'Malegaon, Maharashtra' },
  { city: 'Gaya', state: 'Bihar', displayName: 'Gaya, Bihar' },
  { city: 'Jalgaon', state: 'Maharashtra', displayName: 'Jalgaon, Maharashtra' },
  { city: 'Udaipur', state: 'Rajasthan', displayName: 'Udaipur, Rajasthan' },
  { city: 'Maheshtala', state: 'West Bengal', displayName: 'Maheshtala, West Bengal' },
  { city: 'Tiruppur', state: 'Tamil Nadu', displayName: 'Tiruppur, Tamil Nadu' },
  { city: 'Davanagere', state: 'Karnataka', displayName: 'Davanagere, Karnataka' },
  { city: 'Kozhikode', state: 'Kerala', displayName: 'Kozhikode, Kerala' },
  { city: 'Akbarpur', state: 'Uttar Pradesh', displayName: 'Akbarpur, Uttar Pradesh' },
  { city: 'Kurnool', state: 'Andhra Pradesh', displayName: 'Kurnool, Andhra Pradesh' },
  { city: 'Bokaro', state: 'Jharkhand', displayName: 'Bokaro, Jharkhand' },
  { city: 'Rajahmundry', state: 'Andhra Pradesh', displayName: 'Rajahmundry, Andhra Pradesh' },
  { city: 'Ballari', state: 'Karnataka', displayName: 'Ballari, Karnataka' },
  { city: 'Agartala', state: 'Tripura', displayName: 'Agartala, Tripura' },
  { city: 'Bhagalpur', state: 'Bihar', displayName: 'Bhagalpur, Bihar' },
  { city: 'Latur', state: 'Maharashtra', displayName: 'Latur, Maharashtra' },
  { city: 'Dhule', state: 'Maharashtra', displayName: 'Dhule, Maharashtra' },
  { city: 'Korba', state: 'Chhattisgarh', displayName: 'Korba, Chhattisgarh' },
  { city: 'Bhilwara', state: 'Rajasthan', displayName: 'Bhilwara, Rajasthan' },
  { city: 'Brahmapur', state: 'Odisha', displayName: 'Brahmapur, Odisha' },
  { city: 'Muzaffarpur', state: 'Bihar', displayName: 'Muzaffarpur, Bihar' },
  { city: 'Ahmednagar', state: 'Maharashtra', displayName: 'Ahmednagar, Maharashtra' },
  { city: 'Mathura', state: 'Uttar Pradesh', displayName: 'Mathura, Uttar Pradesh' },
  { city: 'Kollam', state: 'Kerala', displayName: 'Kollam, Kerala' },
  { city: 'Avadi', state: 'Tamil Nadu', displayName: 'Avadi, Tamil Nadu' },
  { city: 'Kadapa', state: 'Andhra Pradesh', displayName: 'Kadapa, Andhra Pradesh' },
  { city: 'Anantapur', state: 'Andhra Pradesh', displayName: 'Anantapur, Andhra Pradesh' },
  { city: 'Tiruvottiyur', state: 'Tamil Nadu', displayName: 'Tiruvottiyur, Tamil Nadu' },
  { city: 'Karnal', state: 'Haryana', displayName: 'Karnal, Haryana' },
  { city: 'Bathinda', state: 'Punjab', displayName: 'Bathinda, Punjab' },
  { city: 'Rampur', state: 'Uttar Pradesh', displayName: 'Rampur, Uttar Pradesh' },
  { city: 'Shivamogga', state: 'Karnataka', displayName: 'Shivamogga, Karnataka' },
  { city: 'Ratlam', state: 'Madhya Pradesh', displayName: 'Ratlam, Madhya Pradesh' },
  { city: 'Modinagar', state: 'Uttar Pradesh', displayName: 'Modinagar, Uttar Pradesh' },
  { city: 'Durg', state: 'Chhattisgarh', displayName: 'Durg, Chhattisgarh' },
  { city: 'Shillong', state: 'Meghalaya', displayName: 'Shillong, Meghalaya' },
  { city: 'Imphal', state: 'Manipur', displayName: 'Imphal, Manipur' },
  { city: 'Hapur', state: 'Uttar Pradesh', displayName: 'Hapur, Uttar Pradesh' },
  { city: 'Ranipet', state: 'Tamil Nadu', displayName: 'Ranipet, Tamil Nadu' },
  { city: 'Anand', state: 'Gujarat', displayName: 'Anand, Gujarat' },
  { city: 'Mangaluru', state: 'Karnataka', displayName: 'Mangaluru, Karnataka' },
  { city: 'Bijapur', state: 'Karnataka', displayName: 'Bijapur, Karnataka' },
  { city: 'Pondicherry', state: 'Puducherry', displayName: 'Pondicherry, Puducherry' },
  { city: 'Aizawl', state: 'Mizoram', displayName: 'Aizawl, Mizoram' },
  { city: 'Kohima', state: 'Nagaland', displayName: 'Kohima, Nagaland' },
  { city: 'Itanagar', state: 'Arunachal Pradesh', displayName: 'Itanagar, Arunachal Pradesh' },
  { city: 'Gangtok', state: 'Sikkim', displayName: 'Gangtok, Sikkim' },
  { city: 'Panaji', state: 'Goa', displayName: 'Panaji, Goa' },
  { city: 'Shimla', state: 'Himachal Pradesh', displayName: 'Shimla, Himachal Pradesh' },
  { city: 'Port Blair', state: 'Andaman and Nicobar Islands', displayName: 'Port Blair, Andaman and Nicobar Islands' },
  { city: 'Kavaratti', state: 'Lakshadweep', displayName: 'Kavaratti, Lakshadweep' },
  { city: 'Daman', state: 'Dadra and Nagar Haveli and Daman and Diu', displayName: 'Daman, Dadra and Nagar Haveli and Daman and Diu' },
  { city: 'Silvassa', state: 'Dadra and Nagar Haveli and Daman and Diu', displayName: 'Silvassa, Dadra and Nagar Haveli and Daman and Diu' },
];

// Helper function to search cities
export const searchCities = (query: string): IndianCity[] => {
  const lowercaseQuery = query.toLowerCase();
  return indianCities.filter(city => 
    city.city.toLowerCase().includes(lowercaseQuery) ||
    city.state.toLowerCase().includes(lowercaseQuery) ||
    city.displayName.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to get state by city
export const getStateByCity = (cityName: string): string | null => {
  const city = indianCities.find(c => 
    c.city.toLowerCase() === cityName.toLowerCase() ||
    c.displayName.toLowerCase() === cityName.toLowerCase()
  );
  return city ? city.state : null;
}; 

export interface CountryCode {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export const countryCodes: CountryCode[] = [
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', dialCode: '+971' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', dialCode: '+966' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', dialCode: '+64' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', dialCode: '+31' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dialCode: '+52' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dialCode: '+82' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', dialCode: '+7' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
];

export const defaultCountryCode = countryCodes.find(country => country.code === 'IN')!; 