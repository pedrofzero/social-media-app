<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(Request $request, ManagerRegistry $doctrine)
    {

        $entityManager = $doctrine->getManager();

        $username = $request->get('username');
        $password = $request->get('password');

        if (!$username || !$password) {
            throw 'Error, please provide both username and password.';
        }

        $validate = $doctrine->getRepository(User::class)->findBy(
            ['username' => $username],
            ['password' => $password]
        );


        if ($validate) {
            return new Response('Logged successfully!');
        }
    }
}
