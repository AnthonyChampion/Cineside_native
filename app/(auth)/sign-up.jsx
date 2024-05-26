import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

export default function SignUp() {

    const [form, setForm] = useState({
        username: "",
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
                    <Image source={images.logo}
                        resizeMode="contain"
                        className="w-24 h-24" />
                    <Text className="text-2xl text-white text-semibold font-psemibold ">Enregistrez-vous !</Text>
                    <FormField
                        title="Nom d'utilisateur"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />
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
                        title="Enregistrez-vous"
                        handlePress={submit}
                        containerStyles="mt-7 h-14"
                        isLoading={isSubmitting} />

                    <View className="justify-center pt-5 flex-col gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Vous avez déja un compte ?
                        </Text>
                        <Link href="/sign-in" className="text-s font-psemibold text-yellow-400">Connectez-vous</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
