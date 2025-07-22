"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SimpleCombobox } from '@/components/ui/simple-combobox';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { personalDetailsSchema, PersonalDetailsFormData } from '@/lib/validators/lead-form';
import { formElementVariants, staggerContainer } from '@/lib/animations';
import { indianCities, IndianCity, countryCodes, CountryCode, defaultCountryCode } from '@/data/indian-cities';
import { useState, useEffect } from 'react';

interface PersonalDetailsStepProps {
  initialData?: Partial<PersonalDetailsFormData>;
  onNext: (data: PersonalDetailsFormData) => void;
  onDataUpdate?: (data: Partial<PersonalDetailsFormData>) => void;
  setIsStepValid?: (valid: boolean) => void;
}

export const PersonalDetailsStep = ({ initialData, onNext, onDataUpdate, setIsStepValid }: PersonalDetailsStepProps) => {
  const [selectedCity, setSelectedCity] = useState<string>(initialData?.location || '');
  const [filteredCities, setFilteredCities] = useState<IndianCity[]>([]);
  const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>(defaultCountryCode);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: { whatsappConsent: true, ...initialData },
    mode: 'onChange',
  });

  useEffect(() => {
    if (setIsStepValid) setIsStepValid(isValid);
  }, [isValid, setIsStepValid]);

  // Update city options when filtered cities change
  useEffect(() => {
    const options = filteredCities.map(city => ({
      value: city.displayName,
      label: city.displayName
    }));
    setCityOptions(options);
  }, [filteredCities]);

  // Initialize with all cities
  useEffect(() => {
    setFilteredCities(indianCities);
  }, []);

  // Handle city selection
  const handleCitySelect = (cityDisplayName: string) => {
    setSelectedCity(cityDisplayName);
    setValue('location', cityDisplayName, { shouldValidate: true });
    // Update parent data when city is selected
    onDataUpdate?.({ location: cityDisplayName });
  };

  const onSubmit = (data: PersonalDetailsFormData) => {
    onNext(data);
  };

  // Handle individual field changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onDataUpdate?.({ name: value });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    const fullNumber = selectedCountryCode.dialCode + value;
    setValue('whatsappNumber', fullNumber, { shouldValidate: true });
    onDataUpdate?.({ whatsappNumber: fullNumber });
  };

  const handleCountryCodeChange = (value: string) => {
    const [countryCode, dialCode] = value.split('-');
    const country = countryCodes.find(c => c.code === countryCode && c.dialCode === dialCode);
    if (country) {
      setSelectedCountryCode(country);
      const fullNumber = country.dialCode + phoneNumber;
      setValue('whatsappNumber', fullNumber, { shouldValidate: true });
      onDataUpdate?.({ whatsappNumber: fullNumber });
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <motion.div variants={formElementVariants} className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...register('name')}
            onChange={(e) => {
              register('name').onChange(e);
              handleNameChange(e);
            }}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <motion.p
              id="name-error"
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.name.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div variants={formElementVariants} className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <SimpleCombobox
            options={cityOptions}
            value={selectedCity}
            onValueChange={handleCitySelect}
            placeholder="Search and select your city"
            searchPlaceholder="Search cities..."
            emptyMessage="No cities found. Try a different search term."
            className={errors.location ? 'border-destructive' : ''}
          />
          {errors.location && (
            <motion.p
              id="location-error"
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.location.message}
            </motion.p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Start typing to search for your city. The state will be automatically detected.
          </p>
        </motion.div>

        <motion.div variants={formElementVariants} className="space-y-2">
          <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
          <div className="flex gap-2">
            <Select value={`${selectedCountryCode.code}-${selectedCountryCode.dialCode}`} onValueChange={handleCountryCodeChange}>
              <SelectTrigger className="w-[120px] text-base">
                <SelectValue>
                  <span className="flex items-center gap-1">
                    <span>{selectedCountryCode.flag}</span>
                    <span>{selectedCountryCode.dialCode}</span>
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {countryCodes.map((country) => (
                  <SelectItem key={country.code} value={`${country.code}-${country.dialCode}`}>
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="text-muted-foreground">{country.dialCode}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="whatsappNumber"
              type="tel"
              placeholder="98765 43210"
              className="text-base flex-1"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              aria-describedby={errors.whatsappNumber ? 'whatsapp-error' : undefined}
            />
          </div>
          {errors.whatsappNumber && (
            <motion.p
              id="whatsapp-error"
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.whatsappNumber.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div variants={formElementVariants} className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="whatsappConsent"
              defaultChecked={true}
              {...register('whatsappConsent')}
              onCheckedChange={(checked) => {
                setValue('whatsappConsent', checked as boolean, { shouldValidate: true });
                onDataUpdate?.({ whatsappConsent: checked as boolean });
              }}
              className="mt-0.5"
            />
            <div className="space-y-1">
              <Label
                htmlFor="whatsappConsent"
                className="text-sm font-normal leading-relaxed cursor-pointer"
              >
                I consent to receiving communication via WhatsApp *
              </Label>
              <p className="text-xs text-muted-foreground">
                By checking this box, you agree to receive updates, legal advice, and payment details through WhatsApp at the number provided above.
              </p>
            </div>
          </div>
          {errors.whatsappConsent && (
            <motion.p
              id="consent-error"
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.whatsappConsent.message}
            </motion.p>
          )}
        </motion.div>

        {/* Hidden submit button for form validation */}
        <button type="submit" style={{ display: 'none' }} />
      </form>
    </motion.div>
  );
}; 