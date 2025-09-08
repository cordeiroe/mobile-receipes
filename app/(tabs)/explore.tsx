import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explorar Receitas</ThemedText>
      </ThemedView>
      <ThemedText>Descubra funcionalidades incríveis do nosso app de receitas.</ThemedText>
      <Collapsible title="Categorias de Receitas">
        <ThemedText>
          Organize suas receitas por categorias como{' '}
          <ThemedText type="defaultSemiBold">Doces</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">Salgados</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">Pratos Principais</ThemedText>.
        </ThemedText>
        <ThemedText>
          Use filtros para encontrar rapidamente suas receitas favoritas por categoria, 
          dificuldade ou tempo de preparo.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Busca Inteligente">
        <ThemedText>
          Encontre receitas digitando ingredientes, nomes ou categorias. Nossa busca 
          procura em todos os campos da receita para você encontrar exatamente o que deseja.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Design Responsivo">
        <ThemedText>
          O app se adapta automaticamente a diferentes tamanhos de tela, desde{' '}
          <ThemedText type="defaultSemiBold">smartphones</ThemedText> até{' '}
          <ThemedText type="defaultSemiBold">tablets</ThemedText>, proporcionando 
          uma experiência otimizada em qualquer dispositivo.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Acessibilidade">
        <ThemedText>
          Todos os componentes incluem suporte completo para{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            leitores de tela e navegação por teclado
          </ThemedText>, tornando o app acessível para todos os usuários.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Performance Otimizada">
        <ThemedText>
          Utilizamos as melhores práticas de React Native, incluindo{' '}
          <ThemedText type="defaultSemiBold">memoização</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">lazy loading</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">FlatList otimizada</ThemedText>{' '}
          para garantir fluidez mesmo com muitas receitas.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Tecnologias Utilizadas">
        <ThemedText>
          Desenvolvido com as mais modernas tecnologias:{' '}
          <ThemedText type="defaultSemiBold">React Native</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">Expo</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">TypeScript</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">Expo Router</ThemedText>.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
