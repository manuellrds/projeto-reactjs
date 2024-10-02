//Professor foi utilizado essa receita de bolo aqui.

//1º = npm install -g react-native-cli
//2º = npx create-expo-app appteste -t
//3º = cd appteste
//4º = npx expo install react-native-web react-dom @expo/metro-runtime
//5º = npx expo install react-native-web react-dom -- --force
//6º = npm install @react-navigation/native 
//7º = npm install @react-navigation/stack
//9º = npm install react-native-screens react-native-safe-area-context
//10º = npm run web
// npm install react-native-vector-icons
//npm install --save-dev @types/react-native-vector-icons

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Tela principal do portfólio del manu
const PortfolioApp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/143850131?v=4' }} 
        style={styles.profilePic}
      />
      <Text style={styles.description}>
        Olá, meu nome é Emanuel Rodrigues. Estudo Desenvolvimento de Software 
        com foco em Front-end e Back-end.  
        Atualmente, estou focado em React Native e continuo expandindo meus conhecimentos.
      </Text>
      <Text style={styles.description}>
        Sou apaixonado por tecnologia, sempre buscando melhorar minhas habilidades e aprender novas linguagens.
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://www.linkedin.com/in/emanuel-rodrigues-996528212/')}>
          <Icon name="linkedin" size={30} color="#FFD700" />
          <Text style={styles.linkText}>LinkedIn - Emanuel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://github.com/manuellrds')}>
          <Icon name="github" size={30} color="#FFD700" />
          <Text style={styles.linkText}>GitHub - manuellrds</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://www.instagram.com/emanuel_rds7/')}>
          <Icon name="instagram" size={30} color="#FFD700" />
          <Text style={styles.linkText}>Instagram - emanuel_rds7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://www.facebook.com/manuel.rodrigues.775823?locale=pt_BR')}>
          <Icon name="facebook" size={30} color="#FFD700" />
          <Text style={styles.linkText}>Facebook - manuel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={() => Linking.openURL('https://www.youtube.com/@lightyngrds3482')}>
          <Icon name="youtube" size={30} color="#FFD700" />
          <Text style={styles.linkText}>YouTube - lightyng</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
       =============================
      </Text>

        <TouchableOpacity style={styles.hobbiesButton} onPress={() => navigation.navigate('Hobbies')}>
          <Text style={styles.hobbiesButtonText}>-------------------Hobbies--------------------</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.musicButton} onPress={() => navigation.navigate('Step1')}>
          <Text style={styles.musicButtonText}>-------------Ouvir um Som brabo---------------</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const StepScreen = ({ navigation, route }) => {
  const { nextScreen, message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{message}</Text>
      <TouchableOpacity
        style={styles.musicButton}
        onPress={() => navigation.navigate(nextScreen)}
      >
        <Text style={styles.musicButtonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Tela final para abrir o link da música
const FinalStep = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Você que pediu, aqui está </Text>
      <TouchableOpacity
        style={styles.musicButton}
        onPress={() => Linking.openURL('https://www.youtube.com/shorts/3TPeFeKl2Wk')}
      >
        <Text style={styles.musicButtonText}>Ouvir um som brabo</Text>
      </TouchableOpacity>
    </View>
  );
};


const HobbiesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hobbiesTitle}>Meus Hobbies e Habilidades</Text>
  {/* Aqui é as estrelinhas bonitinhas  */}
      <View style={styles.skillsContainer}>
        <Text style={styles.skillText}>CSS: </Text>
        <View style={styles.starsContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
      </View>


      <View style={styles.skillsContainer}>
        <Text style={styles.skillText}>PHP: </Text>
        <View style={styles.starsContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.skillText}>Java: </Text>
        <View style={styles.starsContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.skillText}>Ingles: </Text>
        <View style={styles.starsContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.skillText}>Portugues: </Text>
        <View style={styles.starsContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
          <Icon name="star-o" size={20} color="#FFD700" />
        </View>
      </View>

      <Text style={styles.hobbiesText}>🎸 Tocar violão</Text>
      <Text style={styles.hobbiesText}>Skate</Text>
      <Text style={styles.hobbiesText}>🎮 Jogar videogame (e sou muito competitivo!)</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PortfolioApp">
        <Stack.Screen name="PortfolioApp" component={PortfolioApp} options={{ title: 'Meu Portfólio' }} />
        <Stack.Screen name="Hobbies" component={HobbiesScreen} options={{ title: 'Meus Hobbies' }} />
        <Stack.Screen
          name="Step1"
          component={StepScreen}
          initialParams={{
            nextScreen: 'Step2',
            message: 'Você tem certeza que deseja avançar?',
          }}
          options={{ title: 'Música Boa - Passo 1' }}
        />
        <Stack.Screen
          name="Step2"
          component={StepScreen}
          initialParams={{
            nextScreen: 'Step3',
            message: 'Tem mesmo certeza? A música é boa mesmo!',
          }}
          options={{ title: 'Música Boa - Passo 2' }}
        />
        <Stack.Screen
          name="Step3"
          component={StepScreen}
          initialParams={{
            nextScreen: 'Step4',
            message: 'É a última chance de desistir!',
          }}
          options={{ title: 'Música Boa - Passo 3' }}
        />
        <Stack.Screen
          name="Step4"
          component={StepScreen}
          initialParams={{
            nextScreen: 'FinalStep',
            message: 'Última confirmação. Vamos continuar?',
          }}
          options={{ title: 'Música Boa - Passo 4' }}
        />
        <Stack.Screen name="FinalStep" component={FinalStep} options={{ title: 'Musica Braba ta ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1F38',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  linksContainer: {
    marginTop: 20,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#2C2F45',
    padding: 10,
    borderRadius: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#FFD700',
    marginLeft: 10,
  },
  hobbiesButton: {
    marginTop: 20,
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
  },
  hobbiesButtonText: {
    fontSize: 18,
    color: '#1B1F38',
  },
  musicButton: {
    marginTop: 20,
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
  },
  musicButtonText: {
    fontSize: 18,
    color: '#1B1F38',
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillText: {
    fontSize: 18,
    color: '#FFD700',
  },
  starsContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  hobbiesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },
  hobbiesText: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 10,
  },
});

export default App;
