import { useAppSelector } from "store/hooks"
import { weatherSelectors } from "store/redux/weatherApp/weatherAppSlice"
import { useEffect, useState } from "react"

import WeatherCard from "components/WeatherCard/WeatherCard"
import InputForm from "components/InputForm/InputForm"
import Modal from "components/Modal/Modal"
import { Alert } from "@mui/material"

import { PageWrapper } from "./styles"

function Home() {
  const { currentWeatherData, error } = useAppSelector(
    weatherSelectors.weatherState,
  )

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  useEffect(() => {
    if (error) {
      setModalOpen(true)
    }
  }, [error])

  return (
    <PageWrapper>
      <InputForm />
      {currentWeatherData && (
        <WeatherCard weatherData={currentWeatherData} isSaved={false} />
      )}
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Alert severity="error">{error}</Alert>
      </Modal>
    </PageWrapper>
  )
}

export default Home
