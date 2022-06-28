<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class RegisterController extends AbstractController
{
    #[Route('/register', name: 'app_register', methods: 'POST')]
    public function index(Request $request, UserPasswordHasherInterface $passwordHasher, ManagerRegistry $doctrine)
    {
        // get data from POST Request
        $username = $request->get('username');
        $email = $request->get('email');
        $plaintextPassword = $request->get('password');

        $checkUser = $doctrine->getRepository(User::class)->find($username);
        $checkEmail = $doctrine->getRepository(User::class)->find($email);

        if ($checkUser) {
            throw 'Error, username is already being used.';
        };

        if ($checkEmail) {
            throw 'Error, email is already being used.';
        };
        
        $entityManager = $doctrine->getManager();

        $user = new User();

        // hash the password (based on the security.yaml config for the $user class)
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );

        $user->setUsername($username);
        $user->setEmail($email);
        $user->setPassword($hashedPassword);

        $entityManager->persist($user);
        $entityManager->flush();
        
        return new Response('Saved new product with id '.$user->getId());
  
    }
}
