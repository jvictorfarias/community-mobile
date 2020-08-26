import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Linking, Text, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
function DetailIndividualMore() {
    const route = useRoute();

    const individual = route.params.individual;
    const message = 'COMUNICADO DO ACS:'

    function makeCall() {
        Linking.openURL(`tel://+55${individual.phone}`)
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+55${individual.phone}&text=${message}\n`)
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: message,
            recipients: ['alancristian964@gmail.com'],
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Icon style={styles.icon} name="user" size={96} color="#21c8b7" />
            </View>

            <View style={styles.individual}>
                <Text style={[styles.individualProperty, { marginTop: 0 }]}>NOME COMPLETO</Text>
                <Text style={styles.individualValue}>{individual.name}</Text>

                <Text style={styles.individualProperty}>CARTÃO DO SUS</Text>
                <Text style={styles.individualValue}>{individual.cns}</Text>

                <Text style={styles.individualProperty}>CPF</Text>
                <Text style={styles.individualValue}>{individual.cpf}</Text>

                <Text style={styles.individualProperty}>DATA DE NASCIMENTO</Text>
                <Text style={styles.individualValue}>{individual.birthday}</Text>

                <Text style={styles.individualProperty}>SEXO</Text>
                <Text style={styles.individualValue}>{individual.sex}</Text>

                <Text style={styles.individualProperty}>RAÇA/COR</Text>
                <Text style={styles.individualValue}>{individual.color}</Text>

                <Text style={styles.individualProperty}>NOME COMPLETO DO PAI</Text>
                <Text style={styles.individualValue}>{individual.father_name}</Text>

                <Text style={styles.individualProperty}>NOME COMPLETO DA MÃE</Text>
                <Text style={styles.individualValue}>{individual.mother_name}</Text>

                <Text style={styles.individualProperty}>NACIONALIDADE</Text>
                <Text style={styles.individualValue}>{individual.nationality}</Text>

                <Text style={styles.individualProperty}>PAÍS DE NASCIMENTO</Text>
                <Text style={styles.individualValue}>{individual.birth_country}</Text>

                <Text style={styles.individualProperty}>MUNICÍPIO E UF DE NASCIMENTO</Text>
                <Text style={styles.individualValue}>{individual.birth_state}</Text>

                <Text style={styles.individualProperty}>FREQUENTA ESCOLA OU CRECHE</Text>
                <Text style={styles.individualValue}>{individual.is_school_frequency}</Text>

                <Text style={styles.individualProperty}>CURSO MAIS ELEVADO QUE FREQUENTA OU FREQUENTOU</Text>
                <Text style={styles.individualValue}>{individual.education}</Text>

                <Text style={styles.individualProperty}>SITUAÇÃO NO MERCADO DE TRABALHO</Text>
                <Text style={styles.individualValue}>{individual.work}</Text>

                <Text style={styles.individualProperty}>TEM ALGUMA DEFICIÊNCIA</Text>
                <Text style={styles.individualValue}>{individual.is_deficient}</Text>

                <Text style={styles.individualProperty}>QUAL(is)</Text>
                <Text style={styles.individualValue}>{individual.deficient_faulty}</Text>

                <Text style={styles.individualProperty}>ESTÁ GESTANTE</Text>
                <Text style={styles.individualValue}>{individual.is_pregnant}</Text>

                <Text style={styles.individualProperty}>SOBRE O PESO, CONSIDERA-SE</Text>
                <Text style={styles.individualValue}>{individual.imc}</Text>

                <Text style={styles.individualProperty}>ESTÁ FUMANTE</Text>
                <Text style={styles.individualValue}>{individual.is_smoker}</Text>

                <Text style={styles.individualProperty}>FAZ USO DE ÁLCOOL</Text>
                <Text style={styles.individualValue}>{individual.is_alcoholic}</Text>

                <Text style={styles.individualProperty}>FAZ USO DE OUTRAS DROGAS</Text>
                <Text style={styles.individualValue}>{individual.is_drug_addict}</Text>

                <Text style={styles.individualProperty}>TEM HIPERTENSÃO ARTERIAL</Text>
                <Text style={styles.individualValue}>{individual.is_hypertensive}</Text>

                <Text style={styles.individualProperty}>TEM DIABETES</Text>
                <Text style={styles.individualValue}>{individual.is_diabetic}</Text>

                <Text style={styles.individualProperty}>TEVE AVC/DERRAME</Text>
                <Text style={styles.individualValue}>{individual.is_stroke}</Text>

                <Text style={styles.individualProperty}>TEVE INFARTO</Text>
                <Text style={styles.individualValue}>{individual.is_infarct}</Text>

                <Text style={styles.individualProperty}>TEM DOENÇA CARDÍACA/DO CORAÇÃO</Text>
                <Text style={styles.individualValue}>{individual.is_heart_sick}</Text>

                <Text style={styles.individualProperty}>QUAL(IS)</Text>
                <Text style={styles.individualValue}>{individual.heart_disease}</Text>

                <Text style={styles.individualProperty}>TEM OU TEVE PROBLEMAS NOS RINS</Text>
                <Text style={styles.individualValue}>{individual.is_kidney_sick}</Text>

                <Text style={styles.individualProperty}>QUAL(IS)</Text>
                <Text style={styles.individualValue}>{individual.kidney_disease}</Text>

                <Text style={styles.individualProperty}>TEM DOENÇA RESPIRATÓRIA/NO PULMÃO</Text>
                <Text style={styles.individualValue}>{individual.is_respiratory_sick}</Text>

                <Text style={styles.individualProperty}>QUAL(IS)</Text>
                <Text style={styles.individualValue}>{individual.respiratory_disease}</Text>

                <Text style={styles.individualProperty}>ESTÁ COM HANSENÍASE</Text>
                <Text style={styles.individualValue}>{individual.is_hanseniase}</Text>

                <Text style={styles.individualProperty}>ESTÁ COM TUBERCULOSE</Text>
                <Text style={styles.individualValue}>{individual.is_tuberculosis}</Text>

                <Text style={styles.individualProperty}>TEM OU TEVE CÂNCER</Text>
                <Text style={styles.individualValue}>{individual.is_cancer}</Text>

                <Text style={styles.individualProperty}>TEVE ALGUMA INTERNAÇÃO NOS ÚLTIMOS 12 MESES</Text>
                <Text style={styles.individualValue}>{individual.is_hospitalization_last_12_months}</Text>

                <Text style={styles.individualProperty}>POR QUAL CAUSA</Text>
                <Text style={styles.individualValue}>{individual.hospitalization_cause}</Text>

                <Text style={styles.individualProperty}>Algum problema de saúde mental por profissional de saúde</Text>
                <Text style={styles.individualValue}>{individual.is_mental_sick}</Text>

                <Text style={styles.individualProperty}>ESTÁ ACAMADO</Text>
                <Text style={styles.individualValue}>{individual.is_bedridden}</Text>

                <Text style={styles.individualProperty}>ESTÁ DOMICILIADO</Text>
                <Text style={styles.individualValue}>{individual.is_domicilied}</Text>

                <Text style={styles.individualProperty}>ESTÁ EM SITUAÇÃO DE RUA</Text>
                <Text style={styles.individualValue}>{individual.is_homeless}</Text>

                <Text style={styles.individualProperty}>CONDIÇÃO DE SAÚDE</Text>
                <Text style={styles.individualValue}>{individual.health_condition}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactTitle}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={makeCall}>
                        <Text style={styles.actionText}>Telefone</Text>
                        <Icon style={styles.actionIcon} name='phone' size={17} color="#0078c8" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                        <Icon style={styles.actionIcon} name='message-circle' size={17} color="#0078c8" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                        <Icon style={styles.actionIcon} name='mail' size={17} color="#0078c8" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}
export default DetailIndividualMore;