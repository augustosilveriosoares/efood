import * as S from './styles'

export type Props = {
  image: string
  cuisine: string
  title: string
}

const SecondBanner = ({ image, cuisine, title }: Props) => {
  return (
    <S.BannerRest
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
      }}
    >
      <div className="container">
        <S.TitleCuisine>{cuisine}</S.TitleCuisine>

        <S.TitleRest>{title}</S.TitleRest>
      </div>
    </S.BannerRest>
  )
}

export default SecondBanner
