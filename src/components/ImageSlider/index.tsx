import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Container, IndexesImages, ImageIndex, MotoImageWrapper, MotoImage } from './styles';

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider = ({ imagesUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState(0)

  //Performace para acessar diretamente o detalhes das minhas imagens.
  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index)  
  })

  return (
    <Container>
      <IndexesImages>
        {
          imagesUrl.map((item, index) =>(
            <ImageIndex
              key={String(index)} 
              active={index === imageIndex} 
            />
          ))
        }
      </IndexesImages>
        <FlatList 
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({ item }) => (
            <MotoImageWrapper>
              <MotoImage 
                source={{ uri: item }}
                resizeMode='contain'
              />
            </MotoImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </Container>
  );
}