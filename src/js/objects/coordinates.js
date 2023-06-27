export const coordinates = {
    latitude: '',
    longitude: '',
    state: '',
    setCoordinatesFirstLoad(local){
        this.latitude = local.latitude
        this.longitude = local.longitude 
        this.state = local.region 
    },
    setCoordinates(local){
        this.latitude = local.lat
        this.longitude = local.lon
        this.state = local.state
    }
}