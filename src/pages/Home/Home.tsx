import { useAppSelector } from "store/hooks"
import { weatherSelectors } from "store/redux/weatherApp/weatherAppSlice"
import { useEffect, useState } from "react"
import { Alert } from "@mui/material"

import WeatherCard from "components/WeatherCard/WeatherCard"
import InputForm from "components/InputForm/InputForm"
import Modal from "components/Modal/Modal"

import { PageWrapper } from "./styles"

function Home() {
  const { currentWeatherData, error } = useAppSelector(
    weatherSelectors.weatherState,
  )

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (error) {
      setModalOpen(true)
      setErrorMessage(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <InputForm />
      {currentWeatherData && (
        <WeatherCard weatherData={currentWeatherData} isSaved={false} />
      )}
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Alert severity="error">{errorMessage}</Alert>
      </Modal>
    </PageWrapper>
  )
}

export default Home
