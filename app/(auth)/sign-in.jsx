import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

export default function SignIn() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView>
                <View className="w-full min-h-[85vh] justify-center px-4 my-6">
                    <Text className="text-2xl text-white text-semibold font-psemibold ">Connectez-vous !</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-adress"
                    />
                    <FormField
                        title="Mot de passe"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Connexion"
                        handlePress={submit}
                        containerStyles="mt-7 h-14 rounded-2xl"
                        isLoading={isSubmitting} />

                    <View className="justify-center pt-5 flex-col gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Vous n'avez-pas de compte ?
                        </Text>
                        <Link href="/sign-up" className="text-s font-psemibold text-[#08d474]">Connectez-vous !</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
